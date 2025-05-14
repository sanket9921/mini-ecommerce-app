// components/CartIcon.js
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
      <View style={{ marginRight: 15 }}>
        <Ionicons name="cart" size={24} color="black" />
        {cartItems.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItems.length}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -1,
    top: 1,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 12,
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10
  },
});

export default CartIcon;
