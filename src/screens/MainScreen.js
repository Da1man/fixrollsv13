import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header} from '../components/Header';
import {ImageSlider} from '../components/ImageSlider';
import {BottomCart} from '../components/BottomCart';
import {NewestProducts} from '../components/NewestProducts';

export class MainScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    console.log(this.props.navigation)
    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <ImageSlider/>
          <NewestProducts/>
        </ScrollView>
        <BottomCart/>
      </View>
    );
  }
}
