import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { setAuthorizatedToken } from '../../../shared/functions/connection/auth';
import ConnectionApi, {
  ConnectionApiPost,
  MethodType,
} from '../../../shared/functions/connection/connectionApi';
import { RequestLogin, ReturnLogin } from '../../../shared/types/types';
import { useGlobalReducer } from '../../../store/reduces/globalReducer/useGlobalReducer';
import { useUserReducer } from '../../../store/reduces/userReducer/useUserReducer';

export const useRequest = () => {
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { setModal } = useGlobalReducer();

  interface requestProps<T> {
    url: string;
    method: MethodType;
    saveGlobal?: (onject: T) => void;
    body?: unknown;
    message?: string;
  }

  const request = async <T>({
    url,
    method,
    saveGlobal,
    body,
    message,
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requestProps<T>): Promise<any> => {
    //it should be <T | undefined>
    setLoading(true);
    const returnObject: T | undefined = await ConnectionApi.connect<T>(url, method, body)
      .then((res) => {
        if (saveGlobal && res) {
          saveGlobal(res);
        }
        if (message) {
          setModal({ visible: true, title: 'Sucesso!', text: message });
        }

        return res;
      })
      .catch((error) => {
        setModal({ visible: true, title: 'Erro', text: error.message });
        return undefined;
      });
    setLoading(false);
    returnObject;
  };

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await ConnectionApiPost<ReturnLogin>('http://192.168.1.107:8080/auth', body)
      .then((res) => {
        res && setUser(res.user);
        res && setAuthorizatedToken(res.accessToken);
        res && console.log(res.accessToken)
        reset({
          index: 0,
          routes: [{ name: RoutersUrl.HOME }],
        });
        console.log('fiz login');
      })
      .catch(() => {
        setModal({ visible: true, title: 'Erro', text: 'Usuário ou senha inválidos' });
        setErrorMessage('Usuário ou senha incorretos');
        console.log('deu ruim');
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    request,
    authRequest,
    setErrorMessage,
  };
};
