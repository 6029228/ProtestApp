import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

// Mock the entire navigation stack
jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
  }),
}));

describe('App', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('Inloggen')).toBeTruthy();
  });
}); 