import { useContext, useState } from 'react';
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
import ContextStore from '../../Context/CotnextStore';
const CashInAmount = ({ navigation }) => {
  console.log("Cash In Amount")
  const {contextStore, setContextStore} = useContext(ContextStore)
  const [amount, setAmount] = useState("")
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <View style={styles.screen}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          onChangeText={(text) => {setAmount(text)}}
          placeholder='Amount'
          keyboardType='numeric'
        />
        <View style={styles.alignLeftButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log(amount)
              if(!amount || parseFloat(amount) < 50){
                return ToastAndroid.show("At least 50", ToastAndroid.SHORT)
              }
              setContextStore({...contextStore, amount})
              navigation.navigate('CashInChooseOption');
            }}>
            <Text style={{ color: 'white' }}>Cash In</Text>
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
    width: 100,
    fontSize: 15,
    borderRadius: 5,
    backgroundColor: '#252422',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CashInAmount;
