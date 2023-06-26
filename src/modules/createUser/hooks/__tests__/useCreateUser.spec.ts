import { act, renderHook } from '@testing-library/react-native';
import { DEFAULT_CREATE_USER, useCreateUser } from '../useCreateUser';
import { useNavigation } from '@react-navigation/native';

const mockReset = jest.fn();
const mockRequest = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    reset: mockReset,
  }),
}));

jest.mock('../../../login/hooks/useRequest', () => ({
  useRequest: () => ({
    request: mockRequest,
    loading: false,
  }),
}));

describe('UseCreateUser', () => {
  it('Should return create user default', () => {
    const { result } = renderHook(() => useCreateUser());

    expect(result.current.createUser).toEqual(DEFAULT_CREATE_USER);
  });

  it('Shloud change create user after onChangeInput', () => {
    const { result } = renderHook(() => useCreateUser());

    const mockTest = 'mockTest';
    const event: any = {
      nativeEvent: {
        text: mockTest,
      },
    };
    act(() => {
      result.current.handleOnChangeInput(event, 'cpf');
    });

    expect(result.current.createUser.cpf).toEqual(mockTest);
  });
});
