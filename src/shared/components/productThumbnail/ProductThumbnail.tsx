import { useNavigation } from '@react-navigation/native';
import { convertMoney } from '../../functions/money';
import { theme } from '../../themes/theme';
import { CartRequest, ProductType } from '../../types/types';
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ContainerProductThumbnail, InsertButton, ProductImage } from './productThumbnail.style';
import { RoutersUrl } from '../../enums/routers.enum';
import { ProductNavigationProp } from '../../../modules/product/components/Product';
import { Icon } from '../icons/icons';
import { useRequest } from '../../../modules/login/hooks/useRequest';
import { cartURL } from '../../functions/connection/apiUrl';
import { MethodEnum } from '../../enums/methods.enum';
import { ActivityIndicator } from 'react-native';

interface ProductThumbnailProp {
  product: ProductType;
  margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProp) => {
  const navigation = useNavigation<ProductNavigationProp>();
  const { request, loading } = useRequest();
  const amountDefault = 1;

  const handleAddCart = () => {
    request<unknown, CartRequest>({
      url: cartURL,
      method: MethodEnum.POST,
      body: {
        productId: product.id,
        amount: amountDefault,
      },
      message: 'Produto adicionado ao carrinho!'
    })
      .then(() => console.log('deu bom'))
      .catch(() => console.log('deu ruim'));
  };

  const handleGoToProduct = () => {
    navigation.navigate(RoutersUrl.PRODUCT, {
      product,
    });
  };

  return (
    <ContainerProductThumbnail
      margin={margin}
      onPress={handleGoToProduct}
    >
      <ProductImage
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMlYQf4eFMIVSrEq5aXUR6ryZOSEs_ZW0xCA&usqp=CAU',
        }}
      />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLDE}>
        {convertMoney(product.price)}
      </Text>
      <InsertButton onPress={handleAddCart}>
        {loading ? (
          <ActivityIndicator color={theme.colors.neutralTheme.white} />
        ) : (
          <Icon name="cart" color={theme.colors.neutralTheme.white} />
        )}
      </InsertButton>
    </ContainerProductThumbnail>
  );
};

export default ProductThumbnail;
