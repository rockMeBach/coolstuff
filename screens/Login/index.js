import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import styles from '../../styles/auth-styles';

export default function Login({ navigation }){
  const [isready, setisready] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePwd] = useState("");

  useEffect(()=>{
    //load custom fonts
    Font.loadAsync({
      'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
    }).then(async ()=>{
      setisready(true)
    })
  }, [])

  if(isready){
    return (
      <View style={{ flex: 1, padding: 20, paddingTop: 50, backgroundColor: 'black'}}>
        <Text style={{...styles.default, ...styles.heading}}>
          cool<Text style={{color: '#b1ff5e'}}>stuff</Text>
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

        <TouchableOpacity>
          <Text style={{...styles.default, marginTop: 10, color: '#b1ff5e'}}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitButton}
        onPress={()=>{
          navigation.navigate('DrawerHome')
        }}>
          <Text style={{...styles.default, ...styles.buttonText}}>Login</Text>
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

        <TouchableOpacity style={styles.socialLogins} 
        onPress={()=>{
          logIn()
        }}>
          <Image
            style={{ width: '10%', aspectRatio: 1}}
            source={require('../../assets/facebook.png')}
          />
          <View style={{padding: 10, flex: 0.9, alignItems: 'center'}}>
            <Text style={{...styles.default}}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>

        {/*footer part*/}
        <View style={styles.loginFooter}>
            <View style={{alignItems: 'center', display: 'flex', flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{...styles.default, color: 'gray'}}>New?</Text>
                <TouchableOpacity style={{marginLeft: 5}}
                onPress={()=>{
                    navigation.navigate('Register')
                }}>
                    <Text style={{...styles.default, color: '#b1ff5e'}}>Register now.</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }else{
    return (
      <View></View>
    )
  }
};