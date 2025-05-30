import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, ScrollView, Switch } from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ELITE SPORTWEAR</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Configurações da Conta</Text>

        {/* Profile Section */}
        <View style={styles.profileCard}>
          <Text style={styles.profileName}>Carlos Silva</Text>
          <Text style={styles.profileEmail}>carlos.silva@example.com</Text>
          <Text style={styles.profileMemberSince}>Membro desde: Jan 2022</Text>
        </View>

        {/* Personal Information Form */}
        <View style={styles.formCard}>
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
            <Button title="Cancelar" onPress={() => {}} color="#ccc" />
            <Button title="Salvar Alterações" onPress={() => {}} color="#4f46e5" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#1a1a2e',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#666',
  },
  profileMemberSince: {
    color: '#666',
  },
  formCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  genderOption: {
    fontSize: 16,
    color: '#4f46e5',
  },
  preferenceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  preferenceLabel: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});

export default SettingsScreen;
