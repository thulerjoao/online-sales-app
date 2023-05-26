import { Text, View } from 'react-native';

import Button from '../../../shared/components/button/Button';
import Input from '../../../shared/components/input/input';
import { LoginContainer } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou aqui!');
  };

  return (
    <View>
      <LoginContainer>
        <Text>Login</Text>
        <Input />
        <Button title="Entrar" margin="16px" onPress={handleOnPress} />
      </LoginContainer>
    </View>
  );
};

export default Login;
