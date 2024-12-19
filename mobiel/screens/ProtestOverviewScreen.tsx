import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProtestOverviewScreen({ route }) {
  const protests = [
    { id: 1, name: 'Klimaatmars', date: '12-11-2023', location: 'Amsterdam', goal: 'Klimaatverandering tegengaan' },
    { id: 2, name: 'Onderwijsstaking', date: '15-11-2023', location: 'Rotterdam', goal: 'Betere salarissen voor docenten' },
    { id: 3, name: 'Woonprotest', date: '20-11-2023', location: 'Den Haag', goal: 'Betaalbare woningen voor iedereen' },
    { id: 4, name: 'Zorgdemonstratie', date: '25-11-2023', location: 'Utrecht', goal: 'Meer geld voor de zorg' },
    { id: 5, name: 'Antiracisme protest', date: '30-11-2023', location: 'Eindhoven', goal: 'Gelijkheid en rechtvaardigheid' },
    { id: 6, name: 'Vredesmars', date: '05-12-2023', location: 'Groningen', goal: 'Einde aan alle oorlogen' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {protests.map((protest) => (
          <View key={protest.id} style={styles.protestCard}>
            <Text style={styles.protestName}>{protest.name}</Text>
            <Text style={styles.protestInfo}>Datum: {protest.date}</Text>
            <Text style={styles.protestInfo}>Locatie: {protest.location}</Text>
            <Text style={styles.protestInfo}>Doel: {protest.goal}</Text>
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
    backgroundColor: '#DC143C',
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  protestName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  protestInfo: {
    color: '#fff',
    fontSize: 14,
  },
});