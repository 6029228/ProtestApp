import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateProtestScreen from '@/screens/CreateProtestScreen'
import ProtestDetailScreen from '@/screens/ProtestDetailScreen'
import ProtestsScreen from '@/screens/ProtestsScreen'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Protests" component={ProtestsScreen} />
        <Stack.Screen name="CreateProtest" component={CreateProtestScreen} />
        <Stack.Screen name="ProtestDetail" component={ProtestDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 