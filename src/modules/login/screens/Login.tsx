import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
// import { Icon } from '../../../shared/components/icons/icons';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { LoginContainer, Logo } from '../styles/login.styles';

const Login = () => {
  const { email, password, loading, errorMsg, handleOnPress, handleEmail, handlePassword } =
    useLogin();

  return (
    <View>
      <LoginContainer>
        <Text />
        <Logo resizeMode="contain" source={require('../../../assets/images/purple.png')} />
        <Input
          value={email}
          errorMessage={errorMsg}
          customMargin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email"
          onChange={handleEmail}
        />
        <Input
          value={password}
          errorMessage={errorMsg}
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha"
          onChange={handlePassword}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Entrar"
          margin="16px"
          loading={loading}
          disable={false}
          onPress={handleOnPress}
        />
      </LoginContainer>
    </View>
  );
};

export default Login;
