import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    {
      id: 1,
      imageUri: 'https://encurtador.com.br/UK1Ld',
      title: 'Regata Nike Lakers III 2024/25',
      description: 'Camisa Tailandesa 1.1 - NBA',
      price: 'R$59.99',
      oldPrice: 'R$79.99',
      rating: 5,
    },
    {
      id: 2,
      imageUri: 'https://encurtador.com.br/6DpA0',
      title: 'Camisa Nike Philadelphia Eagles 2024/25',
      description: 'Camisa Tailandesa 1.1 - Edição NFL',
      price: 'R$180,50',
      oldPrice: 'R$260,50',
      rating: 5,
    },
  ]);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.cartSection}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyCart}>Seu carrinho está vazio.</Text>
        ) : (
          cartItems.map(item => (
            <View key={item.id} style={styles.productCard}>
              <Image source={{ uri: item.imageUri }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
              {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
              <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      {/* Total Price */}
      {cartItems.length > 0 && (
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total: {calculateTotal(cartItems)}</Text>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.buttonText}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

interface Product {
  id: number;
  imageUri: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  rating: number;
}

const calculateTotal = (items: Product[]): string => {
  const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace('R$', '').replace(',', '.')), 0);
  return `R$${total.toFixed(2).replace('.', ',')}`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#000000',
    elevation: 4,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    marginHorizontal: 10,
    color: '#FFFFFF',
  },
  cartSection: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 16,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  productTitle: {
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#000000',
  },
  productDescription: {
    color: '#666666',
  },
  productPrice: {
    color: '#000000',
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
  },
  removeButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  totalSection: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default App;
