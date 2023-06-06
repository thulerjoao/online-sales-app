import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import Button from '../../../shared/components/button/button';
import Text from '../../../shared/components/text/text';
import { logout } from '../../../shared/functions/connection/auth';

const Home = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <>
      <Text>Home</Text>
      <Button title="SAIR" onPress={() => logout(navigation)} />
    </>
  );
};

export default Home;
