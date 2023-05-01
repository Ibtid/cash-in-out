import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Home from '../screens/Home';
import RegisterBill from '../screens/RegisterBill';
import Summary from '../screens/Summary';
import CreateBillAmount from '../screens/CreateBillAmount';
import ScanNFC from '../screens/ScanNfc';
import GenerateQRCode from '../screens/GenerateQRCode';
import QRCode from '../screens/QRCode';

import CashInAmount from '../screens/CashIn/CashInAmount';
import CashInChooseOption from '../screens/CashIn/CashInChooseOption';
import CashInSummary from '../screens/CashIn/CashInSummary';
import CashOutAmount from '../screens/CashOut/CashOutAmount';
import CashOutChooseOption from '../screens/CashOut/CashOutChooseOption';
import CashOutSummary from '../screens/CashOut/CashOutSummary';
import BillPaymentForm from '../screens/BillPayment/BillPaymentForm';
import BillPaymentWait from '../screens/BillPayment/BillPaymentWait';
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
        <Stack.Screen name='ScanNFC' component={ScanNFC} />
        <Stack.Screen name='GenerateQrCode' component={GenerateQRCode} />
        <Stack.Screen name='getQRCode' component={QRCode} />
        <Stack.Screen name='CashInChooseOption' component={CashInChooseOption} />
        <Stack.Screen name='CashInSummary' component={CashInSummary} />
        <Stack.Screen name="CashOutChooseOption" component={CashOutChooseOption}/>
        <Stack.Screen name='CashOutSummary' component={CashOutSummary} />
        <Stack.Screen name = "BillPaymentForm" component={BillPaymentForm} />
        <Stack.Screen name="BillPaymentWait" component={BillPaymentWait} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
