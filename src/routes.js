import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ChooseYourSide from './pages/ChooseYourSide';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Login,
      CreateAccount,
      ChooseYourSide,
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
