import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  BackHandler,
  Dimensions,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorPalete } from '../styles/color';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CashInChooseOption = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'white',
      }}>
      <View style={{ padding: 20, width: '100%' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
          Choose Option
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginVertical: 20,
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScanNFC');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              width: '40%',
              padding: 10,
              backgroundColor: colorPalete.violet,
              borderRadius: 5,
            }}>
            <Text style={{ textAlign: 'center', width: '100%' }}>Scan NFC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('getQRCode');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              width: '40%',
              padding: 10,
              backgroundColor: colorPalete.violet,
              borderRadius: 5,
            }}>
            <Text style={{ textAlign: 'center', width: '100%' }}>QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CashInChooseOption;
