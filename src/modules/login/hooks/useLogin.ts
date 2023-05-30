import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';

import { ConnectionApiPost } from '../../../shared/functions/connection/connectionApi';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('user@user.com');
  const [password, setPassword] = useState<string>('user');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleOnPress = async () => {
    setLoading(true);
    console.log('Clicou aqui!');
    await ConnectionApiPost('http://192.168.1.107:8080/auth', {
      email: email,
      password: password,
    })
      .then(() => {
        console.log('fiz login');
        setLoading(false);
      })
      .catch(() => {
        setErrorMsg('Usuário ou senha incorretos');
        console.log('deu ruim');
        setLoading(false);
      });
  };

  const handleEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setErrorMsg('');
    setEmail(event.nativeEvent.text);
  };

  const handlePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setErrorMsg('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMsg,
    handleOnPress,
    handleEmail,
    handlePassword,
  };
};
