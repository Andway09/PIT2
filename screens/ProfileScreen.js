import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profilePic from '../images/picc.jpg'; 

const ProfileScreen = ({ navigation }) => { 
  const [isPushEnabled, setPushEnabled] = useState(true);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  const togglePushSwitch = () => setPushEnabled(previousState => !previousState);
  const toggleDarkModeSwitch = () => setDarkModeEnabled(previousState => !previousState);

  const dynamicStyles = isDarkModeEnabled ? styles.darkMode : styles.lightMode;

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileSection}>
          <Image source={profilePic} style={styles.avatar} />
          <Text style={[styles.name, dynamicStyles.text]}>Andre Jimm Campilan</Text>
          <Text style={[styles.email, dynamicStyles.text]}>andreroquecampilan9@gmail.com</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inventorySection}>
          <TouchableOpacity style={styles.optionRow}>
            <Text style={[styles.optionText, dynamicStyles.text]}>Settings and Privacy</Text>
            <Ionicons name="chevron-forward" size={24} color={isDarkModeEnabled ? '#fff' : '#000'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionRow}>
            <Text style={[styles.optionText, dynamicStyles.text]}>Switch Account</Text>
            <Ionicons name="chevron-forward" size={24} color={isDarkModeEnabled ? '#fff' : '#000'} />
          </TouchableOpacity>
        </View>

        <View style={styles.preferencesSection}>
          <View style={styles.optionRow}>
            <Text style={[styles.optionText, dynamicStyles.text]}>Push Notifications</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isPushEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={togglePushSwitch}
              value={isPushEnabled}
            />
          </View>

          <View style={styles.optionRow}>
            <Text style={[styles.optionText, dynamicStyles.text]}>Dark Mode</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isDarkModeEnabled ? '#f5dd4b' : '#f4f3f4'}
              onValueChange={toggleDarkModeSwitch}
              value={isDarkModeEnabled}
            />
          </View>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Login')} 
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  editProfileButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editProfileText: {
    color: '#fff',
    fontSize: 16,
  },
  inventorySection: {
    marginBottom: 40,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 18,
  },
  preferencesSection: {
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 40,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lightMode: {
    container: {
      backgroundColor: '#fff',
    },
    text: {
      color: '#000',
    },
  },
  darkMode: {
    container: {
      backgroundColor: '#333',
    },
    text: {
      color: '#fff',
    },
  },
});

export default ProfileScreen;
