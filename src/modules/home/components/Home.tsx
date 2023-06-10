import { useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/button/button';
import Text from '../../../shared/components/text/text';
import { logout } from '../../../shared/functions/connection/auth';
import { useEffect } from 'react';
import { useProductReducer } from '../../../store/reduces/productReducer/useProductReducer';
import { TouchableOpacity, View } from 'react-native';
import { useRequest } from '../../login/hooks/useRequest';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { productURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/types';
import { ProductNavigationProp } from '../../product/components/Product';

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
    <>
      <Text>Home</Text>
      <Button title="SAIR" onPress={() => logout(navigation)} />
      {products &&
        products.map((element) => {
          return (
            <View key={element.id}>
              <TouchableOpacity onPress={() => handleGoToProduct(element)}>
              <Text>{element.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
    </>
  );
};

export default Home;
