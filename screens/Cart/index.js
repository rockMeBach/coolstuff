import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from '../../styles/auth-styles';
import Product from '../../components/Product';

export default function Cart({ route, navigation }){
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
                Cart
            </Text>

            <ScrollView style={{flex:1, marginTop: 20}}>

                <View>
                    {route.params.cartItems.map((product, i)=>
                        <Product key={i} product={product} isCartItem={true} />
                    )}
                </View>

            </ScrollView>
        </View>
    );
};