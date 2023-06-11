import { theme } from '../../themes/theme';
import { ProductType } from '../../types/types';
import Button from '../button/button';
import Text from '../text/text';
import { textTypes } from '../text/textTypes';
import { ContainerProductThumbnail, ProductImage } from './productThumbnail.style';

interface ProductThumbnailProp {
  product: ProductType;
  margin?: string;
}

const ProductThumbnail = ({ product, margin }: ProductThumbnailProp) => {
  return <ContainerProductThumbnail margin={margin}>
    <ProductImage source={{uri: product.image}}/>
    <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{product.name}</Text>
    <Text color={theme.colors.mainTheme.primary} type={textTypes.BUTTON_SEMI_BOLDE}>{`R$ ${product.price.toFixed(2)}`}</Text>
    <Button title='Inserir'/>
  </ContainerProductThumbnail>;
};

export default ProductThumbnail;
