import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { loadFollowedProtests } from '../utils/protestStorage';

export default function FollowedProtestsScreen({ navigation }) {
  const [followedProtests, setFollowedProtests] = useState([]);

  useEffect(() => {
    const fetchFollowedProtests = async () => {
      const loadedFollowedProtests = await loadFollowedProtests();
      setFollowedProtests(loadedFollowedProtests);
    };
    fetchFollowedProtests();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {followedProtests.map((protest) => (
          <View key={protest.id} style={styles.protestCard}>
            <TouchableOpacity
              style={styles.protestButton}
              onPress={() => navigation.navigate('ProtestOverview', { id: protest.id })}
            >
              <Text style={styles.protestText}>{protest.name}</Text>
              <Text style={styles.dateText}>{protest.date}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.infoButton}
              onPress={() => navigation.navigate('ProtestOverview', { id: protest.id })}
            >
              <Text style={styles.infoButtonText}>Meer Info</Text>
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
  infoButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
  },
  infoButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

