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

const Summary = ({ navigation, route }) => {
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
          Summary
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: colorPalete.blue,
            padding: 10,
            marginVertical: 10,
            borderRadius: 10,
            height: windowHeight / 6,
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              height: '100%',
              flex: 1,
              marginLeft: 10,
            }}>
            <View>
              <Text style={{ fontWeight: 'bold' }}>Cash In</Text>
              <Text style={{ fontSize: 14 }} numberOfLines={1}>
                From: <Text style={{ fontWeight: 'bold' }}>Ibtid</Text>
              </Text>
              <Text style={{ fontSize: 14 }}>Acc no. 123456789</Text>
            </View>
            <View>
              <Text style={{ fontSize: 14 }} numberOfLines={1}>
                To: <Text style={{ fontWeight: 'bold' }}>Sheetab</Text>
              </Text>
              <Text style={{ fontSize: 14 }}>Acc No. 123456789</Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              height: '100%',
            }}>
            <View></View>
            <View style={{ display: 'flex', alignItems: 'flex-end' }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  color: colorPalete.red,
                }}>
                500 BDT
              </Text>
              <Text numberOfLines={1}>Reference.:123456789</Text>
            </View>
          </View>
        </View>
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
              navigation.navigate('GenerateQrCode');
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

export default Summary;
