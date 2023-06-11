import { useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/button/button';
import Text from '../../../shared/components/text/text';
import { logout } from '../../../shared/functions/connection/auth';
import { useEffect } from 'react';
import { useProductReducer } from '../../../store/reduces/productReducer/useProductReducer';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { useRequest } from '../../login/hooks/useRequest';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { productURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/types';
import { ProductNavigationProp } from '../../product/components/Product';
import ProductThumbnail from '../../../shared/components/productThumbnail/ProductThumbnail';

const Home = () => {
  const { request, loading } = useRequest();
  const { products, setProducts } = useProductReducer();
  const navigation = useNavigation<ProductNavigationProp>();

  useEffect(() => {
    request<ProductType[]>({
      url: productURL,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  const handleGoToProduct = (product: ProductType) => {
    navigation.navigate(RoutersUrl.PRODUCT, {
      product,
    });
  };

  return (
    <View>
      <Text>Home</Text>
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => <ProductThumbnail margin='0px 8px' product={item} />}
        />
    </View>
  );
};
{
}

export default Home;

{/* <Button title="SAIR" onPress={() => logout(navigation)} /> */}