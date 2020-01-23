import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../components/Header';
import {ImageSlider} from '../components/ImageSlider';

export class MainScreen extends React.Component {
  componentDidMount() {}

  render() {
    return <View>
      <Header />
      <ImageSlider />
      <Text>MainScreens</Text>
    </View>
  }
}
