import { View, StyleSheet, Switch } from 'react-native';
import { useState } from 'react';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Instellingen</ThemedText>
      
      <ThemedView style={styles.setting}>
        <ThemedText>Dark Mode</ThemedText>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
      </ThemedView>

      <ThemedView style={styles.setting}>
        <ThemedText>Notificaties</ThemedText>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
}); 