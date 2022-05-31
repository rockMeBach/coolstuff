import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/auth-styles';

export default function Product({product, isCartItem, navigation}){
    return (
        <View style={[styles.product]}>
            <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>{
                navigation.navigate('ProductScreen', {product: product})
            }}>
                <Image source={require('../../assets/nord_stage.webp')}
                style={{flex: 1, resizeMode: 'cover', aspectRatio: 2, alignSelf: 'center', height: 300}}></Image>

                <TouchableOpacity style={[styles.circleButton,
                    {borderWidth: 0, backgroundColor: !isCartItem?'#b1ff5e':'#ff5447', shadowColor: 'black', elevation: 15, 
                    position: 'absolute', zIndex: 1, bottom: 70, right: 15}]}>
                    {!isCartItem?
                        <AntDesign name="plus" size={24} color="black" />
                    :
                        <AntDesign name="minus" size={24} color="black" />
                    }
                </TouchableOpacity>

                <View style={{backgroundColor: 'black', padding: 20, position: 'absolute', bottom: 0, width:'100%', opacity: 0.6}}>
                    <Text style={[styles.default, {fontSize: 25}]} numberOfLines={1}>{product.name}</Text>
                    <Text style={[styles.default, {marginTop: 10}]}>Rs. {product.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}