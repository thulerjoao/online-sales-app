import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
// import { Icon } from '../../../shared/components/icons/icons';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { LoginContainer } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou aqui!');
  };

  return (
    <View>
      <LoginContainer>
        <Text />
        {/* <Icon name="home3" color="blue" size={250} /> */}
        <Input
          errorMessage="Usuário ou senha inválidos"
          placeholder="Digite seu email"
          title="Email"
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          title="Entrar"
          margin="16px"
          loading={false}
          disable={false}
          onPress={handleOnPress}
        />
      </LoginContainer>
    </View>
  );
};

export default Login;
