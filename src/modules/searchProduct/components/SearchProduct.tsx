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
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  TextInputChangeEventData,
} from 'react-native';
import { SearchContainer } from '../../home/styles/home.style';
import ProductCard from '../../../shared/components/productThumbnail/productCard';
import { theme } from '../../../shared/themes/theme';

export interface SearchProductParams {
  search?: string;
}
export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

const SearchProduct = () => {
  const { searchProducts, setSearchProducts, handleSetProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { search } = params;
  const { request, loading } = useRequest();
  const [value, setValue] = useState(search || '');

  const handleRequest = (page?: number) => {
    if(page){
      request<PaginationType<ProductType[]>>({
        url: `${productPageURL}?search=${value}&page=${page}`,
        method: MethodEnum.GET,
        saveGlobal: handleSetProducts,
      });
    }else{
      request<PaginationType<ProductType[]>>({
        url: `${productPageURL}?search=${value}`,
        method: MethodEnum.GET,
        saveGlobal: setSearchProducts,
      });
    }
  };

  const handleOnPress = () => {
    handleRequest();
  };

  const bringNextPage = () => {
    if (searchProducts && searchProducts.meta.currentPage < searchProducts.meta.totalPages)
      handleRequest(searchProducts && searchProducts.meta.currentPage + 1);
  };

  const handleOnChangeInput = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text);
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isBottomScroll = contentOffset.y >= contentSize.height - layoutMeasurement.height;

    if (isBottomScroll && !loading) {
      bringNextPage();
    }
  };

  useEffect(() => {
    setValue(search || '');
  }, [params]);

  useEffect(() => {
    search && handleRequest();
  }, []);


  return (
    <>
      <SearchContainer>
        <Input
          onPressIcon={handleOnPress}
          value={value}
          onChange={handleOnChangeInput}
          iconRight="search"
        />
      </SearchContainer>
      {searchProducts && searchProducts.data && (
        <ScrollView onScroll={handleScroll}>
          {searchProducts.data.map((product, index) => {
            return <ProductCard key={index} product={product} margin="15px" />;
          })}
        </ScrollView>
      )}
      {loading && <ActivityIndicator color={theme.colors.mainTheme.primary} />}
    </>
  );
};

export default SearchProduct;
