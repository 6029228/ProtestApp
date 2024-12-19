import { Stack } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
      }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="protests" options={{ title: 'Protesten' }} />
      <Stack.Screen name="protests/create" options={{ title: 'Protest Maken' }} />
      <Stack.Screen name="settings" options={{ title: 'Instellingen' }} />
      <Stack.Screen name="login" options={{ title: 'Inloggen' }} />
      <Stack.Screen name="register" options={{ title: 'Registreren' }} />
    </Stack>
  );
} 