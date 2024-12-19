import { View, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function Login() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Inloggen</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Gebruikersnaam of email"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Wachtwoord"
        placeholderTextColor="#666"
        secureTextEntry
      />
      <ThemedText type="link">Inloggen</ThemedText>
      <Link href="/register">
        <ThemedText type="link">Registreren</ThemedText>
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