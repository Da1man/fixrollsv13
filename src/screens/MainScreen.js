import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {ImageSlider} from '../components/ImageSlider';
import {BottomCart} from '../components/BottomCart';
import {NewestProducts} from '../components/NewestProducts';
import {ZeroRub} from '../components/DeliveryItems/ZeroRub';
import {OneHour} from '../components/DeliveryItems/OneHour';
import {screenWidth} from '../constants';
import {ApiConnect} from '../WooCommerceApi';

export class MainScreen extends React.Component {
  componentDidMount() {
    console.log('Start fetching products')
    ApiConnect.get('products', {
      per_page: 100,
      category: '88',
    })
      .then((response) => {
        // console.log(response)
        console.log('Fetching products is Done ')
      });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header navigation={this.props.navigation}/>
        <ScrollView >
          <ImageSlider/>
          <NewestProducts navigation={this.props.navigation}/>
          <View style={styles.advantages}>
            <ZeroRub />
            <OneHour />
          </View>
        </ScrollView>
        <BottomCart/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: screenWidth / 3,
    paddingBottom: 10,
  },
  advantages: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
