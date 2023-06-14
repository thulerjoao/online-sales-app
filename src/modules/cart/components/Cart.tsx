import { useEffect } from 'react';
import Text from '../../../shared/components/text/text';
import { useCartReducer } from '../../../store/reduces/cartReducer/useCartReducer';
import { useRequest } from '../../login/hooks/useRequest';
import { cartURL } from '../../../shared/functions/connection/apiUrl';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { CartType } from '../../../shared/types/types';

const Cart = () => {
  const { cart, setCart } = useCartReducer();
  const { request } = useRequest();

  useEffect(() => {
    request<CartType>({
        url: cartURL,
        method: MethodEnum.GET,
        saveGlobal: setCart,
    })
  }, []);

  return <Text>Carrinho</Text>;
};

export default Cart;
