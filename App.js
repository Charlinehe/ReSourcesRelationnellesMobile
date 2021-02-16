import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigator from "./src/routes/homeStack";


export default function App() {
  return (
      <Navigator>
        <StatusBar barStyle="light-content"/> {/* TODO : Vérifier en avec et sans dark mode */}
      </Navigator>
  );
}