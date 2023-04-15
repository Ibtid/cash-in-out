import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import CreateBillAmount from './screens/CreateBillAmount';
import CashInAmount from './screens/CashInAmount';
import CashOutAmount from './screens/CashOutAmount';
import Summary from './screens/Summary';
import RegisterBill from './screens/RegisterBill';
import AppNavigation from './navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
