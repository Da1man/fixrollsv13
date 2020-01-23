import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, Image, Text, Animated, TouchableOpacity, ScrollView } from 'react-native';
import {Header} from '../components/Header';
import {ImageSlider} from '../components/ImageSlider';
import Interactable from 'react-native-interactable';
import {BottomCart} from '../components/BottomCart'

export class MainScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Header/>
        <ImageSlider/>

        <BottomCart />

      </View>
    );
  }
}
