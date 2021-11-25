import React from 'react';
import {
  StyleSheet
  , View
  , SafeAreaView
  , Platform
  , StatusBar
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {

  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight
  },
});

