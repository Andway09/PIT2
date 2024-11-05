import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const RecoverPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
    Alert.alert('Password Recovery', 'Password recovery link sent to your email.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Recover Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleRecoverPassword}>
        <Text style={styles.buttonText}>Send Recovery Link</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 15, paddingLeft: 10 },
  button: { backgroundColor: 'black', padding: 10, alignItems: 'center' },
  buttonText: { color: 'white' }
});

export default RecoverPasswordScreen;
