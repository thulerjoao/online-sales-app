import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUserAction } from '../../store/reduces/userReducer';
import { ConnectionApiPost } from '../functions/connection/connectionApi';
import { RequestLogin, ReturnLogin } from '../types/types';

export const useRequest = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await ConnectionApiPost<ReturnLogin>('http://192.168.1.107:8080/auth', body)
      .then((res) => {
        res && dispatch(setUserAction(res.user));
        console.log('fiz login');
      })
      .catch(() => {
        setErrorMessage('Usuário ou senha incorretos');
        console.log('deu ruim');
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    authRequest,
    setErrorMessage,
  };
};
