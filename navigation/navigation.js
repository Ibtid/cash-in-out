import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import RegisterBill from '../screens/RegisterBill';
import Summary from '../screens/Summary';
import CreateBillAmount from '../screens/CreateBillAmount';
import CashOutAmount from '../screens/CashOutAmount';
import CashInAmount from '../screens/CashInAmount';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}>
        {/*Transfer Fund  */}
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RegisterBill' component={RegisterBill} />
        <Stack.Screen name='Summary' component={Summary} />
        <Stack.Screen name='CreateBillAmount' component={CreateBillAmount} />
        <Stack.Screen name='CashOutAmount' component={CashOutAmount} />
        <Stack.Screen name='CashInAmount' component={CashInAmount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
