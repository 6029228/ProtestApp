import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import CreateProtestScreen from './screens/CreateProtestScreen';
import EditProtestScreen from './screens/EditProtestScreen';
import MyProtestsScreen from './screens/MyProtestsScreen';
import FollowedProtestsScreen from './screens/FollowedProtestsScreen';
import ProtestOverviewScreen from './screens/ProtestOverviewScreen';
import ProtestManageScreen from './screens/ProtestManageScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#CD853F',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <Text style={{ color: '#fff', marginRight: 10 }}>Nav</Text>
            ),
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Inloggen' }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registeren' }} />
          <Stack.Screen name="CreateProtest" component={CreateProtestScreen} options={{ title: 'Protest Maken' }} />
          <Stack.Screen name="EditProtest" component={EditProtestScreen} options={{ title: 'Protest Aanpassen' }} />
          <Stack.Screen name="MyProtests" component={MyProtestsScreen} options={{ title: 'Mijn Protesten' }} />
          <Stack.Screen name="FollowedProtests" component={FollowedProtestsScreen} options={{ title: 'Gevolgde Protesten' }} />
          <Stack.Screen name="ProtestOverview" component={ProtestOverviewScreen} options={{ title: 'Protesten Overzicht' }} />
          <Stack.Screen name="ProtestManage" component={ProtestManageScreen} options={{ title: 'Protesten Beheren' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Instellingen' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

