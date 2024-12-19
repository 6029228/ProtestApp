import { View, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function Register() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Registreren</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Gebruikersnaam"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Wachtwoord"
        placeholderTextColor="#666"
        secureTextEntry
      />
      <ThemedText type="link">Registreren</ThemedText>
      <Link href="/login">
        <ThemedText type="link">Terug naar Login</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
}); 