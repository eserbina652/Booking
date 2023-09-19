import React from 'react';
import StackNavigator from './navigation/StackNavigator';
import {enGB, registerTranslation} from 'react-native-paper-dates';
registerTranslation('en-GB', enGB);
// @ts-ignore
import {ModalPortal} from 'react-native-modals';

const App = () => {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
};

export default App;
