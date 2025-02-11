import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage.tsx';

export const homeNavigations = {
  HOME: 'Home',
} as const;

export type HomeStackParamList = {
  [homeNavigations.HOME]: undefined;
};

export default function HomeStackNavigator() {
  const Stack = createStackNavigator<HomeStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name={homeNavigations.HOME} component={HomePage} />
    </Stack.Navigator>
  );
}
