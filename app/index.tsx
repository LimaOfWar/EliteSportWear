import { View, Text, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={{ backgroundColor: '#FFF', flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 32 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginTop: 16, marginBottom: 32, textAlign: 'center' }}>
        Escolha seu metodo de uso:
      </Text>
      <Link href="/auth/fornecedor">
        <Image style={{ width: 150, height: 150 }} source={require('../assets/fornecedor.png')} />
      </Link>
      <Text
        style={{ fontSize: 32, fontWeight: 'bold' }}>
        Fornecedor
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Forneça e venda produtos.
      </Text>
      <Link href="/auth/comprador">
        <Image style={{ width: 150, height: 150 }} source={require('../assets/comprador.png')} />
      </Link>
      <Text
        style={{ fontSize: 32, fontWeight: 'bold' }}>
        Comprador
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 32 }}>
        Compre produtos de alta qualidade.
      </Text>
    </View>
  )
}

export default index