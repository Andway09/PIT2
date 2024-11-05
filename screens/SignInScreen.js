import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    // Add logic to authenticate user here
    navigation.navigate('UserProfile'); // Navigate to UserProfile after sign-in
  };

  const handleForgotPassword = () => {
    navigation.navigate('RecoverPassword'); // Navigate to Recover Password
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 15, paddingLeft: 10 },
  button: { backgroundColor: 'black', padding: 15, alignItems: 'center', borderRadius: 5 },
  buttonText: { color: 'white' },
  linkText: { color: 'blue', marginTop: 15, textAlign: 'center' },
});

export default SignInScreen;
