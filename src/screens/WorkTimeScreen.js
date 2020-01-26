import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';

export class WorkTimeScreen extends React.Component {
  componentDidMount() {
  }
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <Text>WorkTimeScreen</Text>
        </ScrollView>
        <BottomCart/>
      </View>
    );
  }
}
