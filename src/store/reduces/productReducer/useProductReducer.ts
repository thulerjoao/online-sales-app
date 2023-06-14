import { useDispatch } from 'react-redux';
import { PaginationType, ProductType } from '../../../shared/types/types';
import { useAppSelector } from '../../hooks';
import { setProductsAction, setSearchProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch()
  const { products, searchProducts } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProduct: ProductType[])=> {
    dispatch(setProductsAction(currentProduct))
  }

  const setSearchProducts = (currentProduct: PaginationType<ProductType[]>)=> {
    dispatch(setSearchProductsAction(currentProduct))
  }

  return {
    products,
    searchProducts,
    setProducts,
    setSearchProducts,
    
  }};
