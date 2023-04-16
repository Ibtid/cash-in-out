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
const GenerateQRCode = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <View style={styles.screen}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          // onChangeText={onChangeNumber}
          // value={number}
          onChangeText={(text) => {}}
          placeholder='Phone Number'
          keyboardType='numeric'
        />
        <View style={styles.alignLeftButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('getQRCode');
            }}>
            <Text style={{ color: 'white' }}>Generate QR</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 30,
  },
  label: {
    fontSize: 20,
    marginBottom: 6,
  },
  input: {
    width: '100%',

    marginBottom: 12,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
  },
  alignLeftButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 12,
    padding: 10,
    width: 120,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: '#252422',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GenerateQRCode;
