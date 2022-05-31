import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/auth-styles';

export default function ProductScreen({ route, navigation }){
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
                {route.params.product.name}
            </Text>

            <View style={[styles.product, {marginTop: 25}]}>
                <Image source={require('../../assets/nord_stage.webp')}
                style={{flex: 0, resizeMode: 'cover', aspectRatio: 2, alignSelf: 'center', height: 300}}></Image>
            </View>

            
        </View>
    );
};