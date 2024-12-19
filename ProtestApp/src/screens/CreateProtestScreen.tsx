import React, { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TextInput, Button, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import DateTimePicker from '@react-native-community/datetimepicker'
import { createProtest } from '@/lib/api'
import { ProtestFormSchema } from '@/lib/validations'
import { showMessage } from 'react-native-flash-message'

export default function CreateProtestScreen() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    date: new Date(),
    location: '',
    goal: '',
    description: ''
  })

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const validatedData = ProtestFormSchema.parse({
        ...formData,
        date: formData.date.toISOString(),
      })
      await createProtest(validatedData)
      showMessage({
        message: 'Protest succesvol aangemaakt',
        type: 'success',
      })
      navigation.navigate('Protests')
    } catch (error) {
      showMessage({
        message: 'Er ging iets mis',
        type: 'danger',
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Protest Maken</Text>
        
        <TextInput
          mode="outlined"
          label="Naam van het Protest"
          value={formData.name}
          onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
          style={styles.input}
        />

        <DateTimePicker
          value={formData.date}
          mode="date"
          onChange={(event, selectedDate) => {
            setFormData(prev => ({ ...prev, date: selectedDate || prev.date }))
          }}
        />

        <TextInput
          mode="outlined"
          label="Locatie"
          value={formData.location}
          onChangeText={(text) => setFormData(prev => ({ ...prev, location: text }))}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Doel van het Protest"
          value={formData.goal}
          onChangeText={(text) => setFormData(prev => ({ ...prev, goal: text }))}
          style={styles.input}
        />

        <TextInput
          mode="outlined"
          label="Beschrijving"
          value={formData.description}
          onChangeText={(text) => setFormData(prev => ({ ...prev, description: text }))}
          multiline
          numberOfLines={4}
          style={styles.input}
        />

        <Button 
          mode="contained" 
          onPress={handleSubmit}
          loading={isLoading}
          style={styles.button}
        >
          Bevestigen
        </Button>

        <Button 
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Terug
        </Button>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 8,
  },
}) 