import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/home';
import Login from './modules/login/pages/Login';
import Splash from './modules/splash/components/Splash';
import { RoutersUrl } from './shared/enums/routers.enum';
import CreateUser from './modules/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/icons/icons';
import { theme } from './shared/themes/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name={RoutersUrl.SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={RoutersUrl.LOGIN} component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name={RoutersUrl.NEWUSER}
          component={CreateUser}
          options={{ title: 'Criar usuário' }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
                
              case 'Order':
                iconName = 'cart';
                break;

              default:
                iconName = 'user';
                break;
            }

            return <Icon size={16} name={iconName} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.mainTheme.primary,
          tabBarInactiveTintColor: theme.colors.greyTheme.gray100,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Order" component={Home} options={{ title: 'Pedidos' }} />
        <Tab.Screen name="Profile" component={Home} options={{ title: 'Perfil' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
function createBottomTabNavigatior() {
  throw new Error('Function not implemented.');
}
