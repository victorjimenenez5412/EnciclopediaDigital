import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AnimalList from '../screens/AnimalList';

export default function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='AnimalList'
        component={AnimalList}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}