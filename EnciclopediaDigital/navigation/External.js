import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Welcomeback from '../screens/Welcomeback';

export default function External() {
  return (
    <Stack.Navigator initialRouteName='Welcomeback'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Welcomeback'
        component={Welcomeback}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}