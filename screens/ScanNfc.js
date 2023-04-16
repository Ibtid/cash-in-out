import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorPalete } from '../styles/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ScanNFC = ({ navigation }) => {
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
          <Text style={{ fontSize: 20, marginTop: 20 }}>Scan NFC</Text>
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
