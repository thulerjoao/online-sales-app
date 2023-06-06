import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { MethodEnum } from '../../../shared/enums/methods.enum';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { userURL } from '../../../shared/functions/connection/apiUrl';
import { useUserReducer } from '../../../store/reduces/userReducer/useUserReducer';
import { useRequest } from '../../login/hooks/useRequest';
import { LogoSplash, SplashContainer } from '../styles/splash.style';
import { getAuthorizatedToken } from '../../../shared/functions/connection/auth';
import { UserType } from '../../../shared/types/types';

const Splash = () => {
  const { request } = useRequest();
  const { setUser } = useUserReducer();
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();

  const findUser = async () => {
    let retunedUser = undefined;
    const token = await getAuthorizatedToken();
    if (token) {
      retunedUser = await request<UserType>({
        url: userURL,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });
    }
    return retunedUser;
  };

  useEffect(() => {
    const verifyLogin = async () => {
      const [returnedUser] = await Promise.all([
        findUser,
        new Promise<void>((r) => setTimeout(r, 2000)),
      ]);
      if (returnedUser && returnedUser !== undefined) {
        reset({
          index: 0,
          routes: [{ name: RoutersUrl.HOME }],
        });
      } else {
        reset({
          index: 0,
          routes: [{ name: RoutersUrl.LOGIN }],
        });
      }
    };

    verifyLogin();
  }, []);

  return (
    <SplashContainer>
      <LogoSplash resizeMode="contain" source={require('../../../assets/images/purple.png')} />
    </SplashContainer>
  );
};

export default Splash;
