import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as DocumentPicker from 'expo-document-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const RegisterBill = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);
  const indexes = [0];
  const onPressRemove = (assetId) => {
    setPhotos(photos.filter((photo) => photo.assetId !== assetId));
  };
  const handleChoosePhoto = async () => {
    if (photos.length < 1) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        allowsMultipleSelection: true,
      });

      if (!result.canceled) {
        setPhotos([...photos, ...result.assets.slice(0, 4 - photos.length)]);
      }
    }
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: '100%',
          padding: 20,
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        <Text style={style.label}>Entity Name</Text>
        <TextInput
          style={style.input}
          secureTextEntry={true}
          // onChangeText={onChangeNumber}
          // value={number}
          onChangeText={(text) => {}}
          placeholder='Name'
        />

        {photos.length === 0 ? (
          <TouchableOpacity
            style={style.image}
            onPress={() => {
              handleChoosePhoto();
            }}>
            <Text>Select Photo</Text>
          </TouchableOpacity>
        ) : (
          <View style={style.image}>
            <View
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
              }}>
              <Image
                source={{ uri: photos[0].uri }}
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
              />
              <TouchableOpacity
                style={{ position: 'absolute', top: 0, right: 0 }}
                onPress={() => {
                  onPressRemove(photos[0].assetId);
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 30,
                    backgroundColor: '#f1fafd',
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}>
                    X
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <TouchableOpacity style={style.button} onPress={() => {}}>
          <Text style={{ color: 'white' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  imagesContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginVertical: 30,
  },
  image: {
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    marginVertical: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

export default RegisterBill;
