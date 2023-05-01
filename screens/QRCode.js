import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  Image,
  View,
  BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorPalete } from '../styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcEvents, NfcTech} from 'react-native-nfc-manager';
import { useContext, useEffect } from 'react';
import { io } from 'socket.io-client';
import ContextStore from '../Context/CotnextStore';
import QRCode from 'react-native-qrcode-svg';
import { QrCodeMethods } from '../vars/vars';
const QRCodeCustom = ({ navigation, route }) => {

  const {contextStore, setContextStore} = useContext(ContextStore)
  useEffect(() => {
    if(!contextStore.socket || (contextStore.socket && contextStore.socket.disconnected)){
      console.log("Connecting")
      const socket = io("https://mbras.checkmehere.xyz",{
      reconnectionDelayMax: 10000,
      auth: {
        jwtToken: contextStore.agent.token
      }
    })
    socket.on("agentJoin",() => {onConnectionSocket(socket)})
    socket.on("user", (...args) => {
      const type = contextStore.type
      const [user] = args
      console.log(user)
      console.log(type)
      switch(type){
        case QrCodeMethods.cashIn:
          console.log("Navigating to summary")
          return navigation.navigate("CashInSummary", {user})
          break
        case QrCodeMethods.cashOut:
          console.log("Navigating to cash out summary")
          return navigation.navigate("CashOutSummary", {user})
        case QrCodeMethods.billPayment:
          console.log("Navigation to Bill Payment Wait Screen")
          return navigation.navigate("BillPaymentWait", {user})
      }
      
    })
    setContextStore({...contextStore, socket})
    return () => {
      socket.off("agentJoin")
      socket.off("user")
    }
    }
    
  },[])
  const onConnectionSocket = (socket) => {
    socket.emit("agentJoin")
  }
  async function readNdef() {
    try {
      console.log("Requesting Technology 2")
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.NfcA);
      // the resolved tag object will contain `ndefMessage` property

      const tag = await NfcManager.nfcAHandler.transceive();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <View style={styles.screen}>
        <View style={styles.button}>
          <TouchableOpacity >
          {contextStore.type === QrCodeMethods.billPayment ? <QRCode 
          value={JSON.stringify({method: contextStore.type, amount:contextStore.amount, agentId: contextStore.agent._id, items: contextStore.items, formData: contextStore.formData, reference: "--", entity: contextStore.billPaymentEntity})}
          /> : <QRCode 
          value={JSON.stringify({method: contextStore.type, amount:contextStore.amount, agentId: contextStore.agent._id})}
          />}
          
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  button: {
    width: '100%',
    backgroundColor: colorPalete.secondatWhite,
    marginBottom: 40,

    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default QRCodeCustom;
