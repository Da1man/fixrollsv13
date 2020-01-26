import React from 'react';
import {StyleSheet, View, Image, Text, Animated, TouchableOpacity, ScrollView} from 'react-native';
import Interactable from 'react-native-interactable';
import {THEME} from '../constants';
import {screenWidth, screenHeight} from '../constants';
import {CartItem} from './CartItem';
import Icon from 'react-native-vector-icons/FontAwesome';

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
            <View style={styles.cartTotalWrapper}>
              <View style={styles.cartTotalSection}>
                <Text style={styles.panelSubtitle}>Всего</Text>
                <Text style={styles.pannelCost}>100500 р</Text>

              </View>
              <TouchableOpacity style={styles.cartCheckoutButton} activeOpacity={0.5}>
                <Icon name='shopping-cart'
                      size={THEME.FONT_SIZE_HEADERS}
                      color={THEME.BACKGROUND_GRAY}
                />
              </TouchableOpacity>
            </View>

            <ScrollView>
              <CartItem/>
              <CartItem/>
              <CartItem/>
              <CartItem/>

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
    height: Screen.height + 100,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 70,
    backgroundColor: THEME.BACKGROUND_GRAY,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 8,
    borderWidth: 1,
    borderColor: THEME.FONT_GRAY_LIGHT,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 4,
    borderRadius: 4,
    backgroundColor: THEME.MAIN_COLOR,
    marginBottom: 20,
  },
  cartTotalWrapper: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  cartTotalSection: {
    width: '50%',
    alignItems: 'center',
  },
  cartCheckoutButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: THEME.MAIN_COLOR,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  pannelCost: {
    fontSize: THEME.FONT_SIZE_HEADERS,
    color: THEME.MAIN_COLOR,
    fontFamily: THEME.FONT_FAMILY,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
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
