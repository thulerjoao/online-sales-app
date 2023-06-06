import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import { MethodEnum } from '../../../shared/enums/methods.enum';
import { RoutersUrl } from '../../../shared/enums/routers.enum';
import { userURL } from '../../../shared/functions/connection/apiUrl';
import { useUserReducer } from '../../../store/reduces/userReducer/useUserReducer';
import { useRequest } from '../../login/hooks/useRequest';
import { LogoSplash, SplashContainer } from '../styles/splash.style';

const Splash = () => {
  const { request } = useRequest();
  const { setUser } = useUserReducer();
  const { reset } = useNavigation<NavigationProp<ParamListBase>>();

  useEffect(() => {
    const verifyLogin = async () => {
      const retunedUser = await request({
        url: userURL,
        method: MethodEnum.GET,
        saveGlobal: setUser,
      });

      if (retunedUser) {
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
