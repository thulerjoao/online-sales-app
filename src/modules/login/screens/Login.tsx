import { View } from 'react-native';

import Button from '../../../shared/components/button/button';
import Input from '../../../shared/components/input/input';
import Text from '../../../shared/components/text/text';
import { LoginContainer } from '../styles/login.styles';

const Login = () => {
  const handleOnPress = () => {
    console.log('Clicou aqui!');
  };

  return (
    <View>
      <LoginContainer>
        <Text />
        <Input />
        <Button title="Entrar" margin="16px" onPress={handleOnPress} />
      </LoginContainer>
    </View>
  );
};

export default Login;
