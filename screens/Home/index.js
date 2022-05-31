import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, ScrollView, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import * as Font from 'expo-font';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';
import styles from '../../styles/auth-styles';
import Product from '../../components/Product';
import productsArray from '../../data/products';

export default function Home({ navigation }){
    const [products, setProducts] = useState(productsArray)

    const [searchProducts, setSearchProducts] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        if(searchText.trim()!==""){
            const tmp = products;
            setSearchProducts(tmp.filter((product)=>{return product.name.toLowerCase().match(searchText.toLowerCase())}))
        }else{
            setProducts(products)
        }
    }, [searchText])

    return (
        <View style={{ flex: 1, padding: 10, paddingTop: 50, backgroundColor: 'black'}}>

            <View style={styles.navbar}>
                <TouchableOpacity onPress={()=>{
                    navigation.openDrawer();
                }}>

                    <Ionicons name="menu-sharp" size={26} color="#b1ff5e" style={{alignSelf: 'flex-start'}} />

                </TouchableOpacity>

                <Text style={[styles.default, styles.homeHeading]}>

                    cool<Text style={{color: '#b1ff5e'}}>stuff</Text>

                </Text>

                <TouchableOpacity style={{alignSelf: 'flex-end'}} 
                onPress={()=>{
                    navigation.navigate('Cart', {cartItems: productsArray})
                }}>

                    <Feather name="shopping-cart" size={24} color="white" style={{marginLeft: 0}} />

                    <View style={{backgroundColor: 'red', borderRadius: 100, height: 10, width: 10, justifyContent: 'center',
                    position: 'absolute', top: 0, right: 0}}>
                    </View>

                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.searchSection}>

                <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />

                <TextInput
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                />

            </SafeAreaView>

            <ScrollView style={{flex:1, marginTop: 20}}>

                <Text style={[styles.default, styles.subHeading]}>Products</Text>

                <View>
                    {searchText.trim()!=="" && searchProducts.map((product, i)=>
                        <Product key={i} product={product} isCartItem={false} navigation={navigation} />
                    )}
                    {searchText.trim()==="" && products.map((product, i)=>
                        <Product key={i} product={product} isCartItem={false} navigation={navigation} />
                    )}
                </View>

            </ScrollView>

        </View>
    );
}