import axios from 'axios';
import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
// import { Icon } from '../../../shared/components/icons/icons';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { theme } from '../../../shared/themes/theme';
import { LoginContainer, Logo } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = async () => {
    console.log('Clicou aqui!');
    const returnDb = await axios.get('http://192.168.1.107:8080/correios/28630110');
    console.log(returnDb.data);
  };

  return (
    <View>
      <LoginContainer>
        <Text />
        <Logo resizeMode="contain" source={require('../../../assets/images/purple.png')} />
        <Input
          // errorMessage="Usuário ou senha inválidos"
          customMargin="0px 0px 8px 0px"
          placeholder="Digite seu email"
          title="Email"
        />
        <Input secureTextEntry placeholder="Digite sua senha" title="Senha" />
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
