import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import {screenWidth, THEME} from '../constants';



export const CartItem = () => {
  const onDeleteHandler = () => {
    Alert.alert(
      'Удалить из корзины?',
      'Вы действительно хотите удалить из корзины Теплый Сет (2 шт.) из корзины?',
      [
        {
          text: 'Нет',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Да', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }
  return (
    <View>
      <View style={styles.cartItem}>
        <View style={styles.topSection}>
          <View style={styles.imageSection}>
            <Image style={styles.productImage}
                   source={{uri: 'https://fixrolls.ru/wp-content/uploads/2019/11/HOTSET-1024x705.jpg'}}
                   resizeMode={'cover'}
            />
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.cartItemName}>Теплый сет</Text>
            <><Text style={styles.cartItemOldPrice}>700 руб</Text>
                <Text style={styles.cartItemPrice}>630 руб</Text></>

          </View>
        </View>
        <View style={styles.deleteItemSection}>
          <View style={styles.addCounter}>
            <TouchableOpacity style={styles.decrement} activeOpacity={0.5}>
                  <Text style={styles.counterText}>-</Text>
                </TouchableOpacity>
            <View style={styles.counter}>
              <Text style={styles.counterText}>2</Text>
            </View>
            <TouchableOpacity style={styles.increment} activeOpacity={0.5}>
              <Text style={styles.counterText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.deleteButton} activeOpacity={0.5} onPress={onDeleteHandler}>
            <Text style={styles.deleteButtonText}>Удалить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};


const styles = StyleSheet.create({
  cartItem: {
    width: '100%',
    paddingBottom: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    // height: 230,
  },
  topSection: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
  },
  productImage: {
    width: '100%',
    height: screenWidth / 3,
    borderRadius: 20,
  },
  infoSection: {
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  cartItemName: {
    fontFamily: 'DaysOne-Regular',
    color: '#4299A1',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  cartItemOldPrice: {
    fontFamily: 'DaysOne-Regular',
    color: '#212121',
    fontSize: 22,
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  cartItemPrice: {
    fontFamily: 'DaysOne-Regular',
    color: '#212121',
    fontSize: 26,
  },
  deleteItemSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  addCounter: {
    width: screenWidth / 2.5,
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
  },
  decrement: {
    width: (screenWidth / 2.5) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    width: (screenWidth / 2.5) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  increment: {
    width: (screenWidth / 2.5) / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontFamily: 'DaysOne-Regular',
    color: '#212121',
    fontSize: 24,
  },
  counterTextLock: {
    fontFamily: 'DaysOne-Regular',
    color: '#A5A5A5',
    fontSize: 24,
  },
  deleteButton: {
    width: screenWidth / 2.5,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#4299A1',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  deleteButtonText: {
    fontFamily: 'DaysOne-Regular',
    color: 'white',
    fontSize: 20,
    textTransform: 'uppercase',
  },

});
