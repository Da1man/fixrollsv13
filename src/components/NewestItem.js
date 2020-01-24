import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import {THEME, screenWidth} from '../constants';

export const NewestItem = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://fixrolls.ru/wp-content/uploads/2019/11/HOTSET-1024x705.jpg',
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={styles.titleWrapper} >
        <Text style={styles.titleText}>
          Теплый Сет
        </Text>
      </View>
      <View style={styles.priceWrapper} >
        <Text style={styles.priceTextOld}>
          700 р
        </Text>
        <Text style={styles.priceTextNew}>
          630 р
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: screenWidth - 20,
    height: screenWidth / 1.7,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.FONT_SIZE_MIDDLE,
  },
  priceWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  priceTextOld: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.FONT_SIZE_LARGE,
    padding: 5,
    textDecorationLine: 'line-through',
  },
  priceTextNew: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: 30,
    padding: 5,
    color: THEME.FONT_ACENT,
  },
});
