import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/button/button';
import Text from '../../../shared/components/text/text';
import { logout } from '../../../shared/functions/connection/auth';
import userReducer from '../../../store/reduces/userReducer';
import { useEffect } from 'react';
import { useProductReducer } from '../../../store/reduces/productReducer/useProductReducer';
import { View } from 'react-native';
import { useRequest } from '../../login/hooks/useRequest';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { userProduct } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { ProductType } from '../../../shared/types/types';

const Home = () => {
  const { request, loading } = useRequest();
  const { products, setProducts } = useProductReducer();
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    request<ProductType[]>({
      url: userProduct,
      method: MethodEnum.GET,
      saveGlobal: setProducts,
    });
  }, []);

  return (
    <>
      <Text>Home</Text>
      <Button title="SAIR" onPress={() => logout(navigation)} />
      {products &&
        products.map((element) => {
          return (
            <View>
              <Text>{element.name}</Text>
            </View>
          );
        })}
    </>
  );
};

export default Home;
