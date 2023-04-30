import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  BackHandler,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorPalete } from '../styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

const ScanNFC = ({ navigation }) => {
  async function writeNdef({type, value}) {
    let result = false;
  
    try {
      console.log("Starting Technology")
      await NfcManager.start();
      console.log("Requesting Technology")
      const nfstech = await NfcManager.requestTechnology(NfcTech.NfcA);
      console.log(nfstech)
      console.log("Encoding Message")
      const toBytes = (string) => Array.from(Buffer.from(string, 'utf8'));
      const bytes = toBytes('Some text here...');
      if (bytes) {
        console.log("Sending")
        const result = await NfcManager.nfcAHandler.transceive(bytes)
        console.log(result)
      }
    } catch (ex) {
      console.log("Error generating here")
      console.warn(ex);
    } finally {
      // STEP 4
      console.log("Cancelling Technology")
      NfcManager.cancelTechnologyRequest();
    }
  
    return result;
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
          <Icon name='cellphone-nfc' size={200} color={colorPalete.black} />
          <TouchableOpacity onPress={writeNdef}>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Scan NFC</Text>
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

export default ScanNFC;
