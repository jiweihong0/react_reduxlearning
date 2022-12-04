import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Mainroute from './navigator';
import {configureStore} from '@reduxjs/toolkit';
import allReducers from "./reducer";
import { Provider } from "react-redux";

export default function App() {
  const store = configureStore({reducer:allReducers});
  return (
    
    <SafeAreaProvider>
      <Provider store={store}>
        <Mainroute />
        <StatusBar />
      </Provider>
    </SafeAreaProvider>

  );
}

