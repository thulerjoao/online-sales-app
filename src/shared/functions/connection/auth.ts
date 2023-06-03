import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

export const unsetAuthorizatedToken = () => {
  removeItemStorage('AUTORIZATION_KEY');
};

export const setAuthorizatedToken = async (token: string) => {
  setItemStorage('AUTORIZATION_KEY', token);
};

export const getAuthorizatedToken = async () => {
  return getItemStorage('AUTORIZATION_KEY');
};
