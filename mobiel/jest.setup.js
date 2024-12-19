import 'react-native-gesture-handler';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      goBack: jest.fn(),
    }),
  };
});

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: ({ children }) => children,
    SafeAreaView: ({ children }) => children,
    useSafeAreaInsets: () => inset,
  };
});

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: jest.fn().mockReturnValue({
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
  }),
}));

jest.mock('./screens/CreateProtestScreen', () => 'CreateProtestScreen');
jest.mock('./screens/EditProtestScreen', () => 'EditProtestScreen');

jest.mock('react-native-gesture-handler', () => {
  return {
    PanGestureHandler: 'PanGestureHandler',
    State: {},
    // Add other specific components you're using from gesture-handler
  };
}); 