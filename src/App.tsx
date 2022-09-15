import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{title: 'Mechanics List'}}
            name='list_screen'
            component={ListScreen}
          />
          <Stack.Screen
            options={({ route }: any) => ({ title: route.params.mechanicName })}
            name='detail_screen'
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App