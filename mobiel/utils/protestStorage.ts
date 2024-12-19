import * as FileSystem from 'expo-file-system';

const protestsFileUri = `${FileSystem.documentDirectory}protests.json`;
const usersFileUri = `${FileSystem.documentDirectory}users.json`;
const followedProtestsFileUri = `${FileSystem.documentDirectory}followedProtests.json`;

export async function saveProtests(protests) {
  try {
    await FileSystem.writeAsStringAsync(protestsFileUri, JSON.stringify(protests));
  } catch (error) {
    console.error('Error saving protests:', error);
  }
}

export async function loadProtests() {
  try {
    const protests = await FileSystem.readAsStringAsync(protestsFileUri);
    return JSON.parse(protests);
  } catch (error) {
    console.error('Error loading protests:', error);
    return [];
  }
}

export async function saveUsers(users) {
  try {
    await FileSystem.writeAsStringAsync(usersFileUri, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
}

export async function loadUsers() {
  try {
    const users = await FileSystem.readAsStringAsync(usersFileUri);
    return JSON.parse(users);
  } catch (error) {
    console.error('Error loading users:', error);
    return [];
  }
}

export async function saveFollowedProtests(followedProtests) {
  try {
    await FileSystem.writeAsStringAsync(followedProtestsFileUri, JSON.stringify(followedProtests));
  } catch (error) {
    console.error('Error saving followed protests:', error);
  }
}

export async function loadFollowedProtests() {
  try {
    const followedProtests = await FileSystem.readAsStringAsync(followedProtestsFileUri);
    return JSON.parse(followedProtests);
  } catch (error) {
    console.error('Error loading followed protests:', error);
    return [];
  }
}