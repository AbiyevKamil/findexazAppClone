import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MainNavigator from './MainNavigator';

function App() {
  return (
    <Provider store={store}>
      <StatusBar style={'auto'} />
      <MainNavigator />
    </Provider>
  );
}


export default App;