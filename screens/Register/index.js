import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/auth-styles';

export default function Register({ route, navigation }){
  const [isready, setisready] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePwd] = useState("");

  useEffect(()=>{
    //load custom font and hide the splash screen
    Font.loadAsync({
      'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
    }).then(async ()=>{
      setisready(true)
    })
  }, [])

  if(isready){
    return (
      <View style={{ flex: 1, padding: 20, paddingTop: 50, backgroundColor: 'black'}}>
        <TouchableOpacity
          onPress={()=>{
            try{
                navigation.goBack()
            }catch(err){
                console.log(err)
            }
          }}
          style={styles.circleButton}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <Text style={{...styles.default, ...styles.heading}}>
          Register
        </Text>

        <SafeAreaView style={{width:'100%', marginTop:'5%'}}>
          <Text style={{...styles.default, ...styles.label}}>
            Email
          </Text>
          <TextInput
            style={{...styles.default, ...styles.input}}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"example@email.com"}
            placeholderTextColor="silver"
          />

          <Text style={{...styles.default, ...styles.label}}>
            Password
          </Text>
          <TextInput
            style={{...styles.default, ...styles.input}}
            value={password}
            textContentType={"password"}
            onChangeText={onChangePwd}
            placeholder={"Your Password"}
            placeholderTextColor="silver"
          />
        </SafeAreaView>

        <TouchableOpacity style={styles.submitButton}>
          <Text style={{...styles.default, ...styles.buttonText}}>Register</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
          <Text style={{...styles.default, color: 'silver', marginLeft: 5, marginRight: 5, textAlign: 'center'}}>OR</Text>
          <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
        </View>

        <TouchableOpacity style={styles.socialLogins}>
          <Image
            style={{ width: '10%', aspectRatio: 1}}
            source={require('../../assets/google.png')}
          />
          <View style={{padding: 10, flex: 0.9, alignItems: 'center'}}>
            <Text style={{...styles.default}}>Continue with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialLogins}>
          <Image
            style={{ width: '10%', aspectRatio: 1}}
            source={require('../../assets/facebook.png')}
          />
          <View style={{padding: 10, flex: 0.9, alignItems: 'center'}}>
            <Text style={{...styles.default}}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }else{
    return (
      <View></View>
    )
  }
};