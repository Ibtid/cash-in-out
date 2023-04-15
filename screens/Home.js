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

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <View style={styles.screen}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name='cash-register' size={40} color={colorPalete.black} />
          <Text style={{ fontSize: 16 }}>Create Bill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name='cash-plus' size={40} color={colorPalete.black} />
          <Text style={{ fontSize: 16 }}>Cash In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name='cash-minus' size={40} color={colorPalete.black} />
          <Text style={{ fontSize: 16 }}>Cash out</Text>
        </TouchableOpacity>
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
    width: '50%',
    backgroundColor: colorPalete.secondatWhite,
    marginBottom: 40,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default Home;
