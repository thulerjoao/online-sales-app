import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';
import { RoutersUrl } from '../../enums/routers.enum';

export const unsetAuthorizatedToken = () => {
  removeItemStorage('AUTORIZATION_KEY');
};

export const setAuthorizatedToken = async (token: string) => {
  setItemStorage('AUTORIZATION_KEY', token);
};

export const getAuthorizatedToken = async () => {
  return getItemStorage('AUTORIZATION_KEY');
};

export const logout = async (navigate: NavigationProp<ParamListBase>) => {
  unsetAuthorizatedToken();

  navigate.reset({
    index: 0,
    routes: [{ name: RoutersUrl.LOGIN }],
  });
};
