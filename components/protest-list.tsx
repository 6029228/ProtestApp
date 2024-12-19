import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function ProtestList() {
  const protests = [
    { id: 1, name: 'Protest 1', date: '2023-12-01' },
    { id: 2, name: 'Protest 2', date: '2023-12-15' },
    { id: 3, name: 'Protest 3', date: '2023-12-30' },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Mijn Protesten</ThemedText>
      {protests.map((protest) => (
        <ThemedView key={protest.id} style={styles.card}>
          <ThemedText type="subtitle">{protest.name}</ThemedText>
          <ThemedText>Datum: {protest.date}</ThemedText>
          <Link href={`/protests/${protest.id}`}>
            <ThemedText type="link">Meer Info</ThemedText>
          </Link>
        </ThemedView>
      ))}
      <Link href="/protests/create">
        <ThemedText type="link">Protest Maken</ThemedText>
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
  card: {
    padding: 16,
    borderRadius: 8,
    gap: 8,
  },
}); 