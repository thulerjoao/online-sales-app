import { Text, View } from 'react-native';

import Input from '../../../shared/components/input/input';
import { LoginContainer } from '../styles/login.styles';

const Login = () => {
  return (
    <View>
      <LoginContainer>
        <Text>Login</Text>
        <Input />
      </LoginContainer>
    </View>
  );
};

export default Login;
