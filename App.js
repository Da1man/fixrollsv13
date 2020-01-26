import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainScreen} from './src/screens/MainScreen';
import {AppNavigation} from './src/screens/AppNavigation';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
          hidden={true}
        />
        <AppNavigation />
      </SafeAreaView>
    );
  };
}

export default App;
