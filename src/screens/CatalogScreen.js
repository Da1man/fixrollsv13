import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';

export class CatalogScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <Text>CatalogScreen</Text>
        </ScrollView>
        <BottomCart/>
      </View>
    );
  }
}
