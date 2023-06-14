import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Text from '../../../shared/components/text/text';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { useRequest } from '../../login/hooks/useRequest';
import { productPageURL } from '../../../shared/functions/connection/apiUrl';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { MethodEnum } from '../../../shared/enums/methods.enum';
import { useProductReducer } from '../../../store/reduces/productReducer/useProductReducer';
import { PaginationType, ProductType } from '../../../shared/types/types';

export interface SearchProductParams {
  search?: string;
}
export type SearchProductNavigationProp = NativeStackNavigationProp<
  Record<string, SearchProductParams>
>;

const SearchProduct = () => {
  const { searchProducts, setSearchProducts } = useProductReducer();
  const { params } = useRoute<RouteProp<Record<string, SearchProductParams>>>();
  const { search } = params;
  const { request } = useRequest()

  useEffect(() => {
    request<PaginationType<ProductType[]>>({
      url: `${productPageURL}?search=${search}`,
      method: MethodEnum.GET,
      saveGlobal: setSearchProducts,
    })
  }, [search]);
  
  return (
    <>
    {searchProducts &&(
      <Text>Tem Produto</Text>

    )}
      <Text>Search Product</Text>
    </>
  );
};

export default SearchProduct;
