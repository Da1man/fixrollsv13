import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import {screenWidth, THEME} from '../constants';

export const CatalogItem = ({image}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.imageSection} activeOpacity={0.5}>
        <Image style={styles.productImage}
               source={{uri: image}}
               resizeMode={'cover'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: screenWidth / 2.3,
    height: screenWidth / 2.3,
    marginBottom: 15,
    backgroundColor: THEME.BACKGROUND_GRAY,
    borderRadius: 20,
  },
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  productImage: {
    width: '100%',
    height: screenWidth / 2.6,
    borderRadius: 20,
  }
});
