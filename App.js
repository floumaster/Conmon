import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';
import colors from './src/constants/colors';
import LoginNavigator from './src/navigation/LoginNavigator/LoginNavigator';
import { Provider } from 'react-redux';
import { store } from './src/reduxManager/index';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();


function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <LoginNavigator/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default App;
