import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {screenWidth, THEME} from '../constants';
import {NewestItem} from './NewestItem';
import {AppButton} from './AppButton';

const renderItems = () => {
  return <NewestItem />
};

export const NewestProducts = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>
          Новинки:
        </Text>
      </View>
      <View style={styles.newestWrapper}>
        <Carousel
          data={[{id: 1}, {id: 2}, {id: 3}]}
          renderItem={renderItems}
          sliderWidth={screenWidth}
          sliderHeight={300}
          itemHeight={300}
          itemWidth={screenWidth - 40}
          loop={true}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={3000}
        />
        <View>
          <AppButton title={'Перейти в каталог'}/>
        </View>
        <NewestItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.FONT_SIZE_LARGE,
    textTransform: 'uppercase',
  },
  newestWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
