import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/button/button';
import Text from '../../../shared/components/text/text';
import { logout } from '../../../shared/functions/connection/auth';
import { useEffect, useState } from 'react';
import { useProductReducer } from '../../../store/reduces/productReducer/useProductReducer';
import { FlatList, NativeSyntheticEvent, TextInputChangeEventData, View } from 'react-native';
import { useRequest } from '../../login/hooks/useRequest';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { productURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/types';
import { ProductNavigationProp } from '../../product/components/Product';

import ProductCard from '../../../shared/components/productThumbnail/productCard';
import Input from '../../../shared/components/input/input';
import { Icon } from '../../../shared/components/icons/icons';
import { SearchContainer } from '../styles/home.style';
import { SearchProductNavigationProp } from '../../searchProduct/components/SearchProduct';

const Home = () => {
  const [ search, setSearch ] = useState<string>()
  const { request, loading } = useRequest();
  const { products, setProducts } = useProductReducer();
  const {navigate} = useNavigation<SearchProductNavigationProp>();

  useEffect(() => {
    request<ProductType[]>({
      url: productURL,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleSearch = () =>{
    navigate(RoutersUrl.SEARCHPRODUCT,{
      search,
    })
  }


  const handleOnChangeSearch = (event: NativeSyntheticEvent<TextInputChangeEventData>) =>{
    setSearch(event.nativeEvent.text)
  }

  return (
    <View>
      {/* <Button title="SAIR" onPress={() => logout(navigation)} /> */}
      <SearchContainer>
        <Input onPressIcon={handleSearch} value={search} onChange={handleOnChangeSearch} iconRight='search'/>
      </SearchContainer>
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => <ProductCard margin="0px 8px" product={item} />}
      />
    </View>
  );
};

export default Home;
