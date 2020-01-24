import React from 'react';
import {StyleSheet, View, Image, Text, Animated, TouchableOpacity, ScrollView} from 'react-native';
import Interactable from 'react-native-interactable';
import {THEME} from '../constants';
import {screenWidth, screenHeight} from '../constants';
import {CartItem} from './CartItem';

const Screen = {
  width: screenWidth,
  height: screenHeight - 75,
};

export class BottomCart extends React.Component {
  constructor(props) {
    super(props);
    this._deltaY = new Animated.Value(Screen.height - 100);
  }

  render() {
    return (
      <View style={styles.panelContainer} pointerEvents={'box-none'}>
        <Animated.View
          pointerEvents={'box-none'}
          style={[styles.panelContainer, {
            backgroundColor: 'black',
            opacity: this._deltaY.interpolate({
              inputRange: [0, Screen.height - 100],
              outputRange: [0.5, 0],
              extrapolateRight: 'clamp',
            }),
          }]}/>
        <Interactable.View
          verticalOnly={true}
          snapPoints={[{y: 50}, {y: Screen.height - 45}]}
          boundaries={{top: 0}}
          initialPosition={{y: Screen.height - 45}}
          animatedValueY={this._deltaY}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <View style={styles.panelHandle}/>
            </View>
            <Text style={styles.panelTitle}>Корзина</Text>
            <Text style={styles.panelSubtitle}>Всего в корзине: 0 товаров</Text>
            <ScrollView>
              <CartItem />
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Directions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Search Nearby</Text>
              </TouchableOpacity>
              <Image style={styles.photo} source={require('../../assets/images/airport-photo.jpg')}/>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Directions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Search Nearby</Text>
              </TouchableOpacity>
              <Image style={styles.photo} source={require('../../assets/images/airport-photo.jpg')}/>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Directions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}>Search Nearby</Text>
              </TouchableOpacity>
              <Image style={styles.photo} source={require('../../assets/images/airport-photo.jpg')}/>
            </ScrollView>
          </View>
        </Interactable.View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: Screen.height + 300,
    padding: 20,
    backgroundColor: THEME.BACKGROUND_GRAY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 8,
    borderWidth: 1,
    borderColor: THEME.FONT_GRAY,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 80,
    height: 8,
    borderRadius: 4,
    backgroundColor: THEME.MAIN_COLOR,
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    marginVertical: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  photo: {
    width: Screen.width - 40,
    height: 225,
    marginTop: 30,
  },
  map: {
    height: Screen.height,
    width: Screen.width,
  },
});
