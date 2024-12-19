import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProtestManageScreen({ navigation }) {
  const protests = [
    { id: 1, name: 'Protest 1', date: 'Datum' },
    { id: 2, name: 'Protest 2', date: 'Datum' },
    { id: 3, name: 'Protest 3', date: 'Datum' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {protests.map((protest) => (
          <View key={protest.id} style={styles.protestCard}>
            <TouchableOpacity
              style={styles.protestButton}
              onPress={() => navigation.navigate('EditProtest', { id: protest.id })}
            >
              <Text style={styles.protestText}>{protest.name}</Text>
              <Text style={styles.dateText}>{protest.date}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('EditProtest', { id: protest.id })}
            >
              <Text style={styles.editButtonText}>Bewerken</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  protestCard: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  protestButton: {
    backgroundColor: '#DC143C',
    padding: 15,
  },
  protestText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  dateText: {
    color: '#fff',
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

