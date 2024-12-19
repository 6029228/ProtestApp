import { View, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { useState, useEffect } from 'react';

export default function ProtestDetails() {
  const { id } = useLocalSearchParams();
  const [protest, setProtest] = useState<any>(null);

  useEffect(() => {
    // Mock data - replace with actual API call
    setProtest({
      id,
      name: 'Protest Details',
      date: '2023-12-01',
      location: 'Amsterdam',
      goal: 'Klimaat Verandering',
      description: 'Een protest voor klimaat bewustzijn'
    });
  }, [id]);

  if (!protest) return <ThemedText>Loading...</ThemedText>;

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{protest.name}</ThemedText>
      <ThemedView style={styles.details}>
        <ThemedText type="defaultSemiBold">Datum: {protest.date}</ThemedText>
        <ThemedText type="defaultSemiBold">Locatie: {protest.location}</ThemedText>
        <ThemedText type="defaultSemiBold">Doel: {protest.goal}</ThemedText>
        <ThemedText>{protest.description}</ThemedText>
      </ThemedView>
      <Link href="/protests">
        <ThemedText type="link">Terug naar Lijst</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  details: {
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
}); 