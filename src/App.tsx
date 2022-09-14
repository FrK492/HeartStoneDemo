import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen'

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{title: 'List Screen'}} name='list_screen' component={ListScreen} />
        <Stack.Screen options={{title: 'Detail Screen'}} name='detail_screen' component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App