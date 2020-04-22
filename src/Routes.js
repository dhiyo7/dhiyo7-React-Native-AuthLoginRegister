import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import AuthScreen from './screens/AuthLoadingScreen';

const BeforeRegis = createStackNavigator(
  {
    Regis: {
      screen: RegisterScreen,
      headerMode: 'none',
      navigationOptions: ({navigation}) => ({
        header: {visible: false},
      }),
    },
  },
  {
    initialRouteName: 'Regis',
  },
);

const AfterRegis = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      headerMode: 'none',
      navigationOptions: ({navigation}) => ({
        header: {visible: false},
      }),
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: () => ({
      headerShown: false,
    }),
  },
);

const AfterSigin = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      headerMode: 'none',
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Dashboard',
    defaultNavigationOptions: () => ({
      headerShown: false,
    }),
  },
);

const AppNavigator = createStackNavigator(
  {
    Register: BeforeRegis,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
      title: null,
    }),
    Login: AfterRegis,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
      title: null,
    }),
    App: AfterSigin,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
      title: 'asu',
      headerMode: 'none',
    }),
    AuthLoadingScreen: AuthScreen,
    navigationOptions: ({navigation}) => ({
      headerShown: false,
      title: null,
    }),
  },
  {
    initialRouteName: 'AuthLoadingScreen',
    defaultNavigationOptions: () => ({
      headerShown: false,
    }),
  },
);

export default createAppContainer(AppNavigator);
