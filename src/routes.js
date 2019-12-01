import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {Main},
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      },
      cardStyle: {
        backgroundColor: colors.dark,
      },
    },
  ),
);

export default Routes;
