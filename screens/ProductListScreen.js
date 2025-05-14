// screens/ProductListScreen.js
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {  Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartIcon from '../components/CartIcon';

const ProductListScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <CartIcon />,
          });
    }, [navigation]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text numberOfLines={1}>{item.title}</Text>
            <Text>₹{item.price}</Text>
            <Text style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Ionicons name="star" color="#ffde21" />
                {item.rating.rate}
            </Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            numColumns={2}
            contentContainerStyle={{ padding: 10 }}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 8,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
    },
    image: {
        height: 100,
        resizeMode: 'contain',
    },
    badge: {
        position: 'absolute',
        right: -6,
        top: 2,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    badgeText: {
        color: 'white',
        fontSize: 8,
    },
});

export default ProductListScreen;
