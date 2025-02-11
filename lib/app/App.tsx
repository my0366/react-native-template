/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './routes.tsx';

function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default App;
