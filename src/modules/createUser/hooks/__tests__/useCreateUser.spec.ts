import { act, renderHook } from '@testing-library/react-native';
import { DEFAULT_CREATE_USER, useCreateUser } from '../useCreateUser';
import { useNavigation } from '@react-navigation/native';
import { mockCreateUser } from '../__mocks__/createUser.mock';

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

  it('Should set disable after insert all data', () => {
    const { result } = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.confirmPassword,
          },
        } as any,
        'confirmPassword',
      );
    });

    expect(result.current.disable).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.password,
          },
        } as any,
        'password',
      );
    });

    expect(result.current.disable).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.cpf,
          },
        } as any,
        'cpf',
      );
    });

    expect(result.current.disable).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.name,
          },
        } as any,
        'name',
      );
    });

    expect(result.current.disable).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.email,
          },
        } as any,
        'email',
      );
    });

    expect(result.current.disable).toEqual(true);

    act(() => {
      result.current.handleOnChangeInput(
        {
          nativeEvent: {
            text: mockCreateUser.phone,
          },
        } as any,
        'phone',
      );
    });

    expect(result.current.disable).toEqual(false);
  });

  it('Should call request in create new user', () => {
    const { result } = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleCreateNewUser();
    });

    expect(mockRequest).toBeCalled();
  });

  it('Shouldn`t call reset in create new user if undefined', () => {
    const { result } = renderHook(() => useCreateUser());

    act(() => {
      result.current.handleCreateNewUser();
    });

    expect(mockReset).not.toBeCalled();
  });
});
