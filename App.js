import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet
} from 'react-native';
import colors from './src/constants/colors';
import RootNavigator from './src/navigation/RootNavigator/RootNavigator'
import { Provider } from 'react-redux';
import { store } from './src/reduxManager/index';

function App() {

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator/>
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
