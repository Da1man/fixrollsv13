import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {THEME, screenWidth} from '../constants';

export const AppButton = ({title, onPress}) => {
  console.log(onPress)
  return (
  <TouchableOpacity style={styles.wrapper} activeOpacity={0.5} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.MAIN_COLOR,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontFamily: THEME.FONT_FAMILY,
    color: '#fff',
    fontSize: THEME.FONT_SIZE_MIDDLE,
    textTransform: 'uppercase',
  },
});
