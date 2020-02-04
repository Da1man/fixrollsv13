import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {AppNavigation} from './src/screens/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          backgroundColor={'white'}
          barStyle={'dark-content'}
          hidden={true}
        />
        <Provider store={store}>
          <AppNavigation/>
        </Provider>
      </SafeAreaView>
    );
  };
}

export default App;
