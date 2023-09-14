import React from 'react';
import {StyleSheet} from 'react-native';
import StackNavigator from './navigation/StackNavigator';

const App = () => {
  return (
    <>
      <StackNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004793',
  },
});
