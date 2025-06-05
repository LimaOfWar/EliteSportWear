import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Aqui você pode implementar a lógica de busca
    console.log('Searching for:', searchQuery);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Navigation */}
      <View style={styles.nav}>
       
        <View style={styles.navLinks}>
          {['Inicio', 'Produtos', 'Marcas', 'Promoções', 'Sobre'].map((link) => (
            <TouchableOpacity key={link}>
              <Text style={styles.navLink}>{link}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar produtos..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroText}>
          <Text style={styles.heroTitle}>ELITE PERFORMANCE</Text>
          <Text style={styles.heroDescription}>Direto dos fabricantes, direto na sua porta. Qualidade premium a preços de atacado.</Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.buttonText}>Comprar agora</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exploreButton}>
              <Text style={styles.buttonText}>Explorar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }}
          style={styles.heroImage}
        />
      </View>

      {/* Sports Categories */}
      <View style={styles.categories}>
        <Text style={styles.categoriesTitle}>COMPRAR POR <Text style={styles.highlight}>ESPORTE</Text></Text>
        <View style={styles.categoryGrid}>
          {['Basquete', 'Futebol', 'Vólei', 'Treinamentos'].map((sport) => (
            <View key={sport} style={styles.categoryItem}>
              <Text style={styles.categoryIcon}>{getSportIcon(sport)}</Text>
              <Text style={styles.categoryName}>{sport}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Featured Products */}
      <View style={styles.featuredProducts}>
        <Text style={styles.featuredTitle}>PRODUTOS EM <Text style={styles.highlight}>DESTAQUE</Text></Text>
        <View style={styles.productGrid}>
          {/* Product 1 */}
          <ProductCard
            imageUri=""
            title="Lakers Jersey"
            description="Product Oficial NBA"
            price="$59.99"
            oldPrice="$79.99"
            rating={4.5}
            saleBadge="SALE"
          />
          {/* Product 2 */}
          <ProductCard
            imageUri="https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Philadelphia Eagles Jersey"
            description="NFL Team Edition"
            price="$64.99"
            rating={4}
          />
          {/* Product 3 */}
          <ProductCard
            imageUri="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Real Madrid Jersey Home"
            description="Champions Edition"
            price="$49.99"
            oldPrice="$69.99"
            rating={5}
            saleBadge="-30%"
          />
          {/* Product 4 */}
          <ProductCard
            imageUri="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Florida Panthers Jersey"
            description="NHL Authentic"
            price="$69.99"
            rating={4.5}
          />
        </View>
      </View>

      {/* Sale Banner */}
      <View style={styles.saleBanner}>
        <Text style={styles.saleTitle}>SUMMER <Text style={styles.saleHighlight}>SALE</Text></Text>
        <Text style={styles.saleDescription}>Até 50% de desconto em itens selecionados. Por tempo limitado!</Text>
      </View>
    </ScrollView>
  );
}

const getSportIcon = (sport: string): string => {
  const icons: { [key: string]: string } = {
    Basquete: '🏀',
    Futebol: '⚽',
    Vólei: '🏐',
    Treinamentos: '👕',
  };
  return icons[sport] || '⚽';
};

interface ProductCardProps {
  imageUri: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  rating: number;
  saleBadge?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUri, title, description, price, oldPrice, rating, saleBadge }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: imageUri }} style={styles.productImage} />
    {saleBadge && <Text style={styles.saleBadge}>{saleBadge}</Text>}
    <Text style={styles.productTitle}>{title}</Text>
    <Text style={styles.productDescription}>{description}</Text>
    <View style={styles.productFooter}>
      <View>
        <Text style={styles.productPrice}>{price}</Text>
        {oldPrice && <Text style={styles.oldPrice}>{oldPrice}</Text>}
      </View>
      <View style={styles.rating}>
        {Array.from({ length: 5 }, (_, index) => (
          <Text key={index} style={styles.star}>{index < Math.floor(rating) ? '⭐' : '☆'}</Text>
        ))}
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',  // Fundo branco
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#000000',  // Fundo preto
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#FFFFFF',  // Texto branco
  },
  highlight: {
    color: '#FFFFFF',  // Texto branco
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    marginHorizontal: 10,
    color: '#FFFFFF',  // Texto branco
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#FFFFFF',  // Fundo branco
    borderRadius: 8,
    margin: 16,
    elevation: 2,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#000000',  // Texto preto
  },
  hero: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#000000',  // Fundo preto
    borderRadius: 8,
    margin: 16,
  },
  heroText: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 16,
  },
  heroTitle: {
    fontSize: 32,
    color: '#FFFFFF',  // Texto branco
  },
  heroDescription: {
    color: '#FFFFFF',  // Texto branco
    marginVertical: 8,
  },
  heroButtons: {
    flexDirection: 'row',
  },
  shopButton: {
    backgroundColor: '#FFFFFF',  // Fundo branco
    padding: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  exploreButton: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000',  // Texto preto
  },
  heroImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  categories: {
    padding: 16,
    backgroundColor: '#FFFFFF',  // Fundo branco
    borderRadius: 8,
    margin: 16,
  },
  categoriesTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Arial',
    color: '#000000',  // Texto preto
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  categoryItem: {
    alignItems: 'center',
    margin: 8,
  },
  categoryIcon: {
    fontSize: 40,
    color: '#000000',  // Texto preto
  },
  categoryName: {
    fontWeight: 'bold',
    color: '#000000',  // Texto preto
  },
  featuredProducts: {
    padding: 16,
    backgroundColor: '#FFFFFF',  // Fundo branco
    borderRadius: 8,
    margin: 16,
  },
  featuredTitle: {
    fontSize: 24,
    marginBottom: 16,
    fontFamily: 'Arial',
    color: '#000000',  // Texto preto
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',  // Fundo branco para os produtos
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  saleBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#FF0000',  // Fundo vermelho
    color: '#FFFFFF',  // Texto branco
    padding: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: 'bold',
  },
  productTitle: {
    fontWeight: 'bold',
    margin: 8,
    fontFamily: 'Arial',
    color: '#000000',  // Texto preto
  },
  productDescription: {
    color: '#666666',  // Cinza
    marginHorizontal: 8,
  },
  productFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  productPrice: {
    color: '#000000',  // Texto preto
    fontWeight: 'bold',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#999999',  // Cinza
  },
  rating: {
    flexDirection: 'row',
  },
  star: {
    color: '#FFD700',  // Dourado
  },
  saleBanner: {
    padding: 16,
    backgroundColor: '#000000',  // Fundo preto
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  saleTitle: {
    fontSize: 24,
    color: '#FFFFFF',  // Texto branco
    fontFamily: 'Arial',
  },
  saleHighlight: {
    color: '#FFFFFF',  // Texto branco
  },
  saleDescription: {
    color: '#FFFFFF',  // Texto branco
    marginTop: 8,
  },
});

export default App;
