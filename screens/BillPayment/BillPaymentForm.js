import { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  BackHandler,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContextStore from '../../Context/CotnextStore';
import dispatch from '../../dispatch/dispatch';
import actions from '../../dispatch/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { colorPalete } from '../../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BillPaymentForm = ({ navigation }) => {
  console.log('Cash In Amount');
  const { contextStore, setContextStore } = useContext(ContextStore);
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({});
  const [item, setItem] = useState({
    name: '',
    qty: '',
    price: '',
  });
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    if (items.length === 0) {
      setAmount(0);
    } else {
      let vAmount = 0;
      items.map((item) => {
        vAmount += parseFloat(item.qty) * parseFloat(item.price);
      });
      setAmount(vAmount);
    }
  }, [items]);
  useEffect(() => {
    (async () => {
      const response = await dispatch(
        actions.getBillPaymentEntity,
        {},
        {},
        contextStore?.agent?.token
      );
      setContextStore({ ...contextStore, billPaymentEntity: response });
      console.log(response);
    })();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}>
      <ScrollView
        style={{
          height: windowHeight,
          width: windowWidth,
          padding: 20,
        }}>
        <View
          style={{
            display: 'flex',
            alignitems: 'center',
            flexDirection: 'row',
            width: '100%',
          }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              selectTextOnFocus={false}
              placeholder='name'
              onChangeText={(text) => {
                setItem({ ...item, name: text });
              }}
              value={item.name}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              placeholder='qty'
              keyboardType='numeric'
              onChangeText={(text) => {
                if (!text) {
                  text = 0;
                }
                setItem({ ...item, qty: parseFloat(text) });
              }}
              value={item.qty.toString()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              placeholder='price'
              keyboardType='numeric'
              onChangeText={(text) => {
                if (!text) {
                  text = 0;
                }
                setItem({ ...item, price: parseFloat(text) });
              }}
              value={item.price.toString()}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setItems([...items, { ...item }]);
            setItem({
              name: '',
              qty: 0,
              price: 0,
            });
          }}>
          <Text style={{ color: 'white' }}>Add</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            marginTop: 30,
            borderTopWidth: 1,
            paddingTop: 40,
            marginBottom: 40,
          }}>
          Items: {items.length}
        </Text>
        <View
          style={{
            display: 'flex',
            alignitems: 'center',
            flexDirection: 'row',
            width: '100%',
            marginBottom: 20,
          }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Name</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Quantity</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Price</Text>
          </View>
        </View>
        {items.map((item) => (
          <View
            style={{
              display: 'flex',
              alignitems: 'center',
              flexDirection: 'row',
              width: '100%',
            }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>{item.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>{item.qty}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>{item.price * item.qty}</Text>
            </View>
          </View>
        ))}
        <View style={styles.alignLeftButton}>
          <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}>
            Total:
            {items.reduce(
              (accumulator, item) => accumulator + item.price * item.qty,
              0
            )}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(amount);
            if (items.length === 0) {
              return ToastAndroid.show(
                'At least one item needed',
                ToastAndroid.SHORT
              );
            }
            setContextStore({ ...contextStore, amount, items, formData });
            navigation.navigate('CashInChooseOption');
          }}>
          <Text style={{ color: 'white' }}
          
          >Create Bill</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <Text>{contextStore?.billPaymentEntity?.name}</Text>
      <View style={styles.screen}>
        {items.map((item) => (
          <Text>
            {item.name} {item.qty} x {item.price} ={' '}
            {parseFloat(item.price) * parseFloat(item.qty)}{' '}
            <TouchableOpacity
              onPress={() => {
                setItems(items.filter((vItem) => vItem.name !== item.name));
              }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </Text>
        ))}
        <TextInput
          placeholder='name'
          onChangeText={(text) => {
            setItem({ ...item, name: text });
          }}
          value={item.name}></TextInput>
        <TextInput
          placeholder='qty'
          keyboardType='numeric'
          onChangeText={(text) => {
            if (!text) {
              text = 0;
            }
            setItem({ ...item, qty: parseFloat(text) });
          }}
          value={item.qty.toString()}></TextInput>
        <TextInput
          placeholder='price'
          keyboardType='numeric'
          onChangeText={(text) => {
            if (!text) {
              text = 0;
            }
            setItem({ ...item, price: parseFloat(text) });
          }}
          value={item.price.toString()}></TextInput>
        <TextInput></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setItems([...items, { ...item }]);
            setItem({
              name: '',
              qty: 0,
              price: 0,
            });
          }}>
          <Text style={{ color: 'white' }}>Add</Text>
        </TouchableOpacity>
        {contextStore?.billPaymentEntity?.paymentForm.map((item) => (
          <>
            <Text style={styles.label}>{item.fieldName}</Text>
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              onChangeText={(text) => {
                setFormData({ ...formData, [item.fieldName]: text });
              }}
              placeholder={item.fieldName}
              keyboardType={item.fieldType === 'String' ? 'default' : 'numeric'}
            />
          </>
        ))}
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          // value={number}
          value={amount.toString()}
          placeholder='Amount'
          keyboardType='numeric'
          editable={false}
          selectTextOnFocus={false}
        />
        <View style={styles.alignLeftButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log(amount);
              if (items.length === 0) {
                return ToastAndroid.show(
                  'At least one item needed',
                  ToastAndroid.SHORT
                );
              }
              setContextStore({ ...contextStore, amount, items, formData });
              navigation.navigate('CashInChooseOption');
            }}>
            <Text style={{ color: 'white' }}>Create Bill</Text>
          </TouchableOpacity>
        </View>
      </View> */}
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
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    width: '80%',

    marginBottom: 12,
    borderWidth: 1,
    padding: 4,
    borderRadius: 5,
    fontSize: 16,
  },
  alignLeftButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderTopWidth: 1,
    marginTop: 20,
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

export default BillPaymentForm;
