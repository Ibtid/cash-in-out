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
  import React, { useState, useEffect, useContext } from 'react';

import { colorPalete } from '../../styles/color';
import ContextStore from '../../Context/CotnextStore';


  
  const BillPaymentWait = ({ navigation, route }) => {
    const {user} = route.params
    const {contextStore,setContextStore} = useContext(ContextStore)
    useEffect(() => {
        contextStore.socket.on("complete", () => {
          contextStore.socket.disconnect()
            navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Home',
                  },
                ],
              })
            })
            return () => {
                contextStore.socket.off("complete")
            }
    },[])
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <View style={styles.screen}>
        <Text>Waiting For {user.name}'s Confirmation</Text>
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
  
  export default BillPaymentWait;
  