// screens/ProductDetailScreen.js
import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';
import CartIcon from '../components/CartIcon';

const ProductDetailScreen = ({ route,navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => <CartIcon />,
      });
}, [navigation]);

  return (
    <View style={styles.container}>
        
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>₹{product.price}</Text>
      <Text>⭐ {product.rating.rate} ({product.rating.count} reviews)</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { height: 200, resizeMode: 'contain', marginBottom: 20 },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
});

export default ProductDetailScreen;
