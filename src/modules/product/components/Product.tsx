import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { ProductType } from '../../../shared/types/types';
import Text from '../../../shared/components/text/text';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface ProductParams {
  product: ProductType;
}

export type ProductNavigationProp = NativeStackNavigationProp<Record<string, ProductParams>>;

const Product = () => {
  const { params } = useRoute<RouteProp<Record<string, ProductParams>>>();
  const product = params;

  return (
    <View>
      <Text>{product.product.name}</Text>
    </View>
  );
};

export default Product;
