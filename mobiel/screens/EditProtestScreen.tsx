import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EditProtestScreen({ navigation, route }) {
  const [name, setName] = useState(route.params?.name || '');
  const [date, setDate] = useState(route.params?.date || '');
  const [location, setLocation] = useState(route.params?.location || '');
  const [goal, setGoal] = useState(route.params?.goal || '');
  const [description, setDescription] = useState(route.params?.description || '');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Naam van het Protest"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Datum"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Locatie"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Doel van het Protest"
          value={goal}
          onChangeText={setGoal}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Beschrijving"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('MyProtests')}
          >
            <Text style={styles.buttonText}>Bevestigen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              // Implement delete functionality
              navigation.navigate('MyProtests');
            }}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.secondaryButtonText}>Terug</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CD853F',
  },
  form: {
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    gap: 10,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#DC143C',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});

