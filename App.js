import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Home from './screens/Home';
import Details from './screens/Details';
import Basket from './screens/Basket';
import Order from './screens/Order';
import Delivery from './screens/Delivery';
import Genre from './screens/Genre';
import Search from './screens/Search';
import CustomDrawer from './screens/CustomDrawer';
import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Test" component={Home} />
      {/* <Drawer.Screen name="Search" component={Search} /> */}
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={DrawerRoutes} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{ presentation: 'modal', headerShown: false }}
          />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="Genre" component={Genre} />
          {/* <Stack.Screen name="Search" component={Search} /> */}
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
