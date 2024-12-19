import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';

export default function SettingsScreen() {
  const [fontSize, setFontSize] = useState(16);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingLabel}>Lettergrootte</Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={24}
          step={1}
          value={fontSize}
          onValueChange={setFontSize}
        />
        <Text style={styles.settingValue}>{fontSize}</Text>
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingLabel}>Darkmode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={setIsDarkMode}
          value={isDarkMode}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  settingValue: {
    fontSize: 16,
    fontWeight: '600',
    minWidth: 30,
    textAlign: 'right',
  },
});

