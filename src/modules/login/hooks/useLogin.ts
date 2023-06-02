import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';

import { useRequest } from '../../../shared/hooks/useRequest';
import { useUserReducer } from '../../../store/reduces/userReducer/useUserReducer';

export const useLogin = () => {
  const { user } = useUserReducer();

  const [email, setEmail] = useState<string>('user@user.com');
  const [password, setPassword] = useState<string>('user');
  const { authRequest, loading, errorMessage, setErrorMessage } = useRequest();

  console.log(user);

  const handleOnPress = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handlePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>): void => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    loading,
    errorMessage,
    handleOnPress,
    handleEmail,
    handlePassword,
  };
};
