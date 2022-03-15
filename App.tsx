import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {MainNavigator} from './src/navigation/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <MainNavigator />
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

export default App;
