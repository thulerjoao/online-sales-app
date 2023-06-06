import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native/types';

import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { baseURL } from '../../../shared/functions/connection/apiUrl';
import { ConnectionApiGet } from '../../../shared/functions/connection/connectionApi';
import { UserType } from '../../../shared/types/types';
import { useRequest } from './useRequest';

export const useLogin = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [email, setEmail] = useState<string>('user@user.com');
  const [password, setPassword] = useState<string>('user');
  const { authRequest, loading, errorMessage, setErrorMessage } = useRequest();

  const handleCreateUser = () => navigation.navigate(RoutersUrl.NEWUSER)

  useEffect(() => {
    const firstLogin = async () => {
      const validation = await ConnectionApiGet<UserType>(`${baseURL}/user`).catch(() => undefined);
      if (validation) {
        navigation.navigate(RoutersUrl.HOME);
      }
    };

    firstLogin();
  }, []);

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
    handleCreateUser,
  };
};
