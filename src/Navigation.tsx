import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/home';
import Login from './modules/login/pages/Login';
import Splash from './modules/splash/components/Splash';
import { RoutersUrl } from './shared/enums/routers.enum';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutersUrl.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={RoutersUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen name={RoutersUrl.HOME} component={Home} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
