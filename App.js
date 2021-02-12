import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigator from "./src/routes/homeStack";

export default function App() {
  return (
      <Navigator>
        <StatusBar barStyle="light-content"/> {/* TODO : Vérifier en avec et sans dark mode */}
      </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
