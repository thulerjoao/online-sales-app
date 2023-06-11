import { useNavigation } from '@react-navigation/native';
import { convertMoney } from '../../functions/money';
import { theme } from '../../themes/theme';
import { ProductType } from '../../types/types';
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ContainerProductThumbnail, InsertButton, ProductImage } from './productThumbnail.style';
import { RoutersUrl } from '../../enums/routers.enum';
import { ProductNavigationProp } from '../../../modules/product/components/Product';
import { Icon } from '../icons/icons';

interface ProductThumbnailProp {
  product: ProductType;
  margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProp) => {
  const navigation = useNavigation<ProductNavigationProp>();

  return (
    <ContainerProductThumbnail margin={margin} onPress={() => navigation.navigate(RoutersUrl.PRODUCT, { product })}>
      <ProductImage source={{ uri: product.image }} />
      <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
      <Text color={theme.colors.mainTheme.primary} type={textTypes.PARAGRAPH_SEMI_BOLDE}>
        {convertMoney(product.price)}
      </Text>
      <InsertButton>
        <Icon name='cart' color='white' />
      </InsertButton>
    </ContainerProductThumbnail>
  );
};

export default ProductThumbnail;
