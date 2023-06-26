import { act, renderHook } from '@testing-library/react-native';

import { mockCart } from '../__mocks__/cart.mock';
import { useCartReducer } from '../useCartReducer';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

jest.mock('../../../hooks', () => ({
  useAppSelector: () => ({
    cart: mockCart,
  }),
}));

jest.mock('..', () => ({
  setCartAction: () => null,
}));

describe('Usecart reducer test', () => {
  const { result } = renderHook(() => useCartReducer());

  it('Should return cart', () => {
    expect(result.current.cart).toEqual(mockCart);
  });

  it('Should run setCart', () => {
    act(() => {
      result.current.setCart(mockCart);
    });
    
    expect(mockDispatch).toBeCalled();
  });

});
