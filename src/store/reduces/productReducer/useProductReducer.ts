import { useDispatch } from 'react-redux';
import { ProductType } from '../../../shared/types/types';
import { useAppSelector } from '../../hooks';
import { setProductsAction } from '.';

export const useProductReducer = () => {
  const dispatch = useDispatch()
  const { products } = useAppSelector((state) => state.productReducer);

  const setProducts = (currentProduct: ProductType[])=> {
    dispatch(setProductsAction(currentProduct))
  }

  return {
    products,
    setProducts,
  }};
