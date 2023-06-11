import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './modules/home';
import Login from './modules/login/components/Login';
import Splash from './modules/splash/components/Splash';
import { RoutersUrl } from './shared/enums/routers.enum';
import CreateUser from './modules/createUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from './shared/components/icons/icons';
import { theme } from './shared/themes/theme';
import Ordes from './modules/orders';
import Profile from './modules/profile';
import Product from './modules/product';
import Cart from './modules/cart';
import SearchProduct from './modules/searchProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string;

        switch (route.name) {
          case RoutersUrl.HOME:
            iconName = 'home';
            break;

          case RoutersUrl.SEARCHPRODUCT:
            iconName = 'search';
            break;

          case RoutersUrl.ORDER:
            iconName = 'list';
            break;
          case RoutersUrl.CART:
            iconName = 'cart';
            break;
          case RoutersUrl.PROFILE:
          default:
            iconName = 'user';
            break;
        }

        return <Icon size={16} name={iconName} color={color} />;
      },
      tabBarActiveTintColor: theme.colors.mainTheme.primary,
      tabBarInactiveTintColor: theme.colors.greyTheme.gray100,
      tabBarStyle: {
        height: 52,
        padding: 8,
      },
      tabBarLabelStyle: {
        marginBottom: 8,
      },
    })}
  >
    <Tab.Screen name={RoutersUrl.HOME} component={Home} options={{ headerShown: false }} />
    <Tab.Screen
      name={RoutersUrl.SEARCHPRODUCT}
      component={SearchProduct}
      options={{ title: 'Buscar', headerShown: false }}
    />
    <Tab.Screen
      name={RoutersUrl.CART}
      component={Cart}
      options={{ title: 'Carrinho', headerShown: false }}
    />
    <Tab.Screen
      name={RoutersUrl.ORDER}
      component={Ordes}
      options={{ title: 'Pedidos', headerShown: false }}
    />
    <Tab.Screen
      name={RoutersUrl.PROFILE}
      component={Profile}
      options={{ title: 'Perfil', headerShown: false }}
    />
  </Tab.Navigator>
);

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
        <Stack.Screen
          name={RoutersUrl.NEWUSER}
          component={CreateUser}
          options={{ title: 'Criar usuário' }}
        />
        <Stack.Screen
          name={RoutersUrl.LOADING}
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
function createBottomTabNavigatior() {
  throw new Error('Function not implemented.');
}
