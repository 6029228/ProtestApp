import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {
  return (
    <ParallaxScrollView
      headerImage={<HelloWave />}
      headerBackgroundColor={{ dark: '#000', light: '#fff' }}>
      <ThemedText type="title">Welcome to Protest</ThemedText>
      <ThemedText>
        This is a demo app showcasing various UI components and navigation patterns. Feel free to explore!
      </ThemedText>
      <ThemedText type="subtitle">Features</ThemedText>
      <ThemedText>• Dark mode support</ThemedText>
      <ThemedText>• Haptic feedback</ThemedText>
      <ThemedText>• Parallax scrolling</ThemedText>
      <ThemedText>• Animated components</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 