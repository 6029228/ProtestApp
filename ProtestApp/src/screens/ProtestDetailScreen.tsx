import React, { useEffect, useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-paper'
import { useRoute } from '@react-navigation/native'
import { getProtestById } from '@/lib/api'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ProtestDetailScreen() {
  const route = useRoute()
  const { id } = route.params as { id: string }
  const [protest, setProtest] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (id) {
      getProtestById(id)
        .then(data => setProtest(data))
        .catch(console.error)
        .finally(() => setIsLoading(false))
    }
  }, [id])

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (!protest) {
    return (
      <View style={styles.centered}>
        <Text>Protest niet gevonden</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{protest.name}</Text>
      <Text>Datum: {new Date(protest.date).toLocaleDateString()}</Text>
      <Text>Locatie: {protest.location}</Text>
      <Text>Doel: {protest.goal}</Text>
      <Text>Beschrijving: {protest.description}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
}) 