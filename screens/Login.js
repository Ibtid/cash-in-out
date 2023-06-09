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
import dispatch from '../dispatch/dispatch';
import actions from '../dispatch/actions';
import ContextStore from '../Context/CotnextStore';

const Login = ({ navigation }) => {
  const {contextStore, setContextStore} = useContext(ContextStore)
  const [formData, setFormData] = useState({
    phoneNumber: "",
    pinCode: ""
  })
  const onClickSubmit = async () => {
    console.log("Login")
    if(formData.phoneNumber.length !== 11 || formData.pinCode.length !== 5){
      return ToastAndroid.show("Invalid Length", ToastAndroid.SHORT)
    }
    const token = await dispatch(actions.agentLogin, {}, {...formData})
    const agent = await dispatch(actions.getAgent, {}, {}, token)
    setContextStore({...contextStore, agent: {
      ...agent, token
    }})
    navigation.navigate('Home');
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
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          onChangeText={(text) => {
            setFormData({...formData, phoneNumber: text})
          }}
          placeholder='Phone Number'
          keyboardType='numeric'
        />
        <Text style={styles.label}>Pin Code</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          // onChangeText={onChangeNumber}
          // value={number}
          onChangeText={(text) => {
            setFormData({...formData, pinCode: text})
          }}
          placeholder='Pin Code'
          keyboardType='numeric'
        />
        <View style={styles.alignLeftButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onClickSubmit()
            }}>
            <Text style={{ color: 'white' }}>Login</Text>
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

    marginBottom: 20,
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
    marginVertical: 20,
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

export default Login;
