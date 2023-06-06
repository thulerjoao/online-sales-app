import { TouchableOpacity, View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { useLogin } from '../hooks/useLogin';
import { LoginContainer, Logo } from '../styles/login.styles';
import { textTypes } from '../../../shared/components/text/textTypes';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { RoutersUrl } from '../../../shared/enums/routers.enum';

const Login = () => {
  const { email, password, loading, handleOnPress, handleEmail, handlePassword, handleCreateUser } = useLogin();

  return (
    <View>
      <LoginContainer>
        <Text />
        <Logo resizeMode="contain" source={require('../../../assets/images/purple.png')} />
        <Input
          value={email}
          // errorMessage={errorMessage}
          customMargin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email"
          onChange={handleEmail}
        />
        <Input
          value={password}
          // errorMessage={errorMessage}
          secureTextEntry
          placeholder="Digite sua senha"
          title="Senha"
          onChange={handlePassword}
        />
        <TouchableOpacity onPress={handleCreateUser}>
          <Text
            marginCustom="16px"
            type={textTypes.PARAGRAPH_SEMI_BOLDE}
            color={theme.colors.mainTheme.primary}
          >
            Cadastrar usuãrio
          </Text>
        </TouchableOpacity>
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Entrar"
          loading={loading}
          disable={false}
          onPress={handleOnPress}
        />
      </LoginContainer>
    </View>
  );
};

export default Login;
