import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Text from '../../../shared/components/text/text';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useRequest } from '../../login/hooks/useRequest';
import { productPageURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { useProductReducer } from '../../../store/reduces/productReducer/useProductReducer';
import { PaginationType, ProductType } from '../../../shared/types/types';
import Input from '../../../shared/components/input/input';
import { NativeSyntheticEvent, ScrollView, TextInputChangeEventData } from 'react-native';
import { SearchContainer } from '../../home/styles/home.style';
import ProductCard from '../../../shared/components/productThumbnail/productCard';

export interface SearchProductParams {
  search?: string;
}
export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

const SearchProduct = () => {
  const { searchProducts, setSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { search } = params;
  const { request } = useRequest();
  const [value, setValue] = useState(search || '');

  const handleRequest = () => {
    request<PaginationType<ProductType[]>>({
      url: `${productPageURL}?search=${value}`,
      method: MethodEnum.GET,
      saveGlobal: setSearchProducts,
    });
  }

  const handleOnChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text)
  }

  const handleOnPress = () =>{
    handleRequest()
  }

  useEffect(()=>{search&& setValue(search)},[params])

  useEffect(()=>{search&& handleRequest()},[])

  console.log(searchProducts);
  
  return (
    <>
      <SearchContainer>
        <Input onPressIcon={handleOnPress} value={value} onChange={handleOnChangeInput} iconRight='search'/>
      </SearchContainer>
      {searchProducts && searchProducts.data && (
        <ScrollView>
          {searchProducts.data.map((product)=>{
            return(
              <ProductCard key={product.id} product={product} margin='15px'/>
            )
          })}
        </ScrollView>
      )}
      <Text>Search Product</Text>
    </>
  );
};

export default SearchProduct;
