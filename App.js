import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import MainScreen from './src/screens/MainScreen'

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
          hidden={true}
        />
        <MainScreen />
      </SafeAreaView>
    );
  };
}

export default App;
