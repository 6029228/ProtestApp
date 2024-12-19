import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { TextInput } from 'react-native';
import { router } from 'expo-router';

export default function CreateProtest() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    goal: '',
    description: ''
  });

  const handleSubmit = () => {
    console.log(formData);
    router.back();
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Protest Maken</ThemedText>
      <TextInput 
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
        placeholder="Naam van het Protest"
      />
      <TextInput 
        style={styles.input}
        value={formData.date}
        onChangeText={(text) => setFormData(prev => ({ ...prev, date: text }))}
        placeholder="Datum"
      />
      <TextInput 
        style={styles.input}
        value={formData.location}
        onChangeText={(text) => setFormData(prev => ({ ...prev, location: text }))}
        placeholder="Locatie"
      />
      <TextInput 
        style={styles.input}
        value={formData.goal}
        onChangeText={(text) => setFormData(prev => ({ ...prev, goal: text }))}
        placeholder="Doel van het Protest"
      />
      <TextInput 
        style={[styles.input, styles.textArea]}
        value={formData.description}
        onChangeText={(text) => setFormData(prev => ({ ...prev, description: text }))}
        placeholder="Beschrijving"
        multiline
      />
      <ThemedText type="link" onPress={handleSubmit}>Bevestigen</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
  },
}); 