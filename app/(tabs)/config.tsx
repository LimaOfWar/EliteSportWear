import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView, Switch } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons'; 

const SettingsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
   
      {/* Main Content */}
      <View style={styles.content}>
        
        {/* Profile Section */}
        <Animatable.View style={styles.profileCard} animation="fadeIn" duration={500}>
          <Text style={styles.profileName}>Carlos Silva</Text>
          <Text style={styles.profileEmail}>carlos.silva@example.com</Text>
          <Text style={styles.profileMemberSince}>Membro desde: Jan 2025</Text>
        </Animatable.View>

        {/* Personal Information Form */}
        <Animatable.View style={styles.formCard} animation="fadeIn" duration={500}>
          <Text style={styles.formTitle}>Informações Pessoais</Text>
          <TextInput placeholder="Nome" style={styles.input} defaultValue="Carlos" />
          <TextInput placeholder="Sobrenome" style={styles.input} defaultValue="Silva" />
          <TextInput placeholder="E-mail" style={styles.input} defaultValue="carlos.silva@example.com" />
          <TextInput placeholder="Telefone" style={styles.input} defaultValue="+55 11 98765-4321" />
          <TextInput placeholder="Data de Nascimento" style={styles.input} defaultValue="1990-05-15" />
          
          {/* Gender Selection */}
          <Text style={styles.label}>Gênero</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity>
              <Text style={styles.genderOption}>Masculino</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.genderOption}>Feminino</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.genderOption}>Outro</Text>
            </TouchableOpacity>
          </View>

          {/* Preferences Section */}
          <Text style={styles.formTitle}>Preferências</Text>
          <View style={styles.preferenceContainer}>
            <Text style={styles.preferenceLabel}>Notificações por e-mail</Text>
            <Switch value={true} />
          </View>
          <View style={styles.preferenceContainer}>
            <Text style={styles.preferenceLabel}>Notificações por SMS</Text>
            <Switch value={false} />
          </View>
          <View style={styles.preferenceContainer}>
            <Text style={styles.preferenceLabel}>Modo Escuro</Text>
            <Switch value={false} />
          </View>

          {/* Address Section */}
          <Text style={styles.formTitle}>Endereço Principal</Text>
          <TextInput placeholder="CEP" style={styles.input} defaultValue="01234-567" />
          <TextInput placeholder="Rua" style={styles.input} defaultValue="Av. Paulista" />
          <TextInput placeholder="Número" style={styles.input} defaultValue="1000" />
          <TextInput placeholder="Complemento" style={styles.input} defaultValue="Apto 101" />
          <TextInput placeholder="Cidade" style={styles.input} defaultValue="São Paulo" />
          <TextInput placeholder="Estado" style={styles.input} defaultValue="SP" />

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <Animatable.View animation="fadeInUp" duration={500}>
              <Button title="Cancelar" onPress={() => {}} color="#888" />
            </Animatable.View>
            <Animatable.View animation="fadeInUp" duration={500}>
              <Button title="Salvar Alterações" onPress={() => {}} color="#000" />
            </Animatable.View>
          </View>
        </Animatable.View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF', // Fundo branco
    },
    header: {
      backgroundColor: '#FFFFFF', // Fundo branco
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E5E5', // Linha separadora
    },
    headerTitle: {
      color: '#fffff', // Texto preto
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    content: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#FFFFFF', // Texto preto
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileCard: {
      backgroundColor: '#000000', // Fundo cinza claro
      padding: 16,
      borderRadius: 8,
      marginBottom: 16,
      borderColor: '#E5E5E5',
      borderWidth: 1,
    },
    profileName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    profileEmail: {
      color: '#FFFFFF',
    },
    profileMemberSince: {
      color: '#FFFFFF',
    },
    formCard: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      borderRadius: 8,
      borderColor: '#E5E5E5',
      borderWidth: 1,
    },
    formTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#000000',
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
      backgroundColor: '#FFFFFF', // Fundo branco para os inputs
      color: '#000000',
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: '#000000',
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    genderOption: {
      fontSize: 16,
      color: '#000000',
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 20,
    },
    preferenceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    preferenceLabel: {
      fontSize: 16,
      color: '#000000',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
    },
});

export default SettingsScreen;
