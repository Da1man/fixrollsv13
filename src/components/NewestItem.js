import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import {THEME, screenWidth} from '../constants';

export const NewestItem = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.5} style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://fixrolls.ru/wp-content/uploads/2019/11/HOTSET-1024x705.jpg',
          }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
      <View style={styles.titleWrapper} >
        <Text style={styles.titleText}>
          {item.name}
        </Text>
      </View>
      <View style={styles.priceWrapper} >
        <Text style={styles.priceTextOld}>
          {item.costOld}
        </Text>
        <Text style={styles.priceTextNew}>
          {item.cost}
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
    height: screenWidth / 1.1,
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.FONT_SIZE_LARGE,
    textTransform: 'uppercase',
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
    color: THEME.FONT_ACCENT,
  },
});
