import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import ContextStore from './Context/CotnextStore';
import NfcManager from 'react-native-nfc-manager';
global.Buffer = require('buffer').Buffer;
NfcManager.start()
export default function App() {
  useEffect(() => {
    (async () => {
      const ndefStatus = await NfcManager.ndefHandler.getNdefStatus()
      console.log(ndefStatus)
      const isSupported = await NfcManager.isSupported()
      if(!isSupported){
        Alert.alert(
          'NFC',
          'This Device doesn\'t support NFC',
          [
            {
              text: 'Ok',
              onPress: () => Alert.alert('Cancel Pressed'),
              style: 'ok',
            },
          ],
          {
            cancelable: true,
            onDismiss: () =>
              Alert.alert(
                'This alert was dismissed by tapping outside of the alert dialog.',
              ),
          },
        );
        return
      }
      const status = await NfcManager.isEnabled()
      console.log(status)
      if(!status){
        Alert.alert(
          'NFC',
          'Please Enable NFC from settings',
          [
            {
              text: 'Go to settings',
              onPress: () => {NfcManager.goToNfcSetting()},
              style: 'ok',
            },
          ],
          {
            cancelable: true,
          },
        );
        return
      }
    })()
  }, [])
  const [contextStore, setContextStore] = useState({
    socket: null,
    agent: {},
    type: "",
    amount: 0,
    user: {},
    items: [],
    billPaymentEntity: {paymentForm: []},
    formData: {}
  })
  return (
    <ContextStore.Provider value={{contextStore, setContextStore}}>
      <SafeAreaProvider>
      <AppNavigation />
    </SafeAreaProvider>
    </ContextStore.Provider>
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
