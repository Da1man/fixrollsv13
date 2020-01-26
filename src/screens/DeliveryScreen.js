import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Header} from '../components/Header';

export class DeliveryScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Header/>
        <ScrollView>
          <Text>DeliveryScreen</Text>
        </ScrollView>
      </View>
    );
  }
}
