import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from '../pages/DashBoard';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
  return (
    <Navigator>
      <Screen name="DashBoard" component={DashBoard} />
    </Navigator>
  );
};

export default AppStack;
