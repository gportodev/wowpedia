import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Login,
      CreateAccount,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerShown: false,
      },
    }
  )
);

export default Routes;
