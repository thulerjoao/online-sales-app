import { useState } from 'react';

import { ConnectionApiPost } from '../functions/connection/connectionApi';
import { RequestLogin, ReturnLogin, UserType } from '../types/types';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<UserType>();

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await ConnectionApiPost<ReturnLogin>('http://192.168.1.107:8080/auth', body)
      .then((res) => {
        res && setUser(res.user);
        console.log('fiz login');
        console.log(user);
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha incorretos');
        console.log('deu ruim');
      });

    setLoading(false);
  };

  return {
    loading,
    user,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
