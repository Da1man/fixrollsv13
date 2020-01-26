import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {screenWidth, THEME} from '../constants';
import {NewestItem} from './NewestItem';
import {AppButton} from './AppButton';

const renderItems = ({item, index}) => {
  return <NewestItem item={item} />
};

export const NewestProducts = () => {
  const data = [
    {
      id: 1,
      name: 'Теплый сет',
      costOld: 700,
      cost: 630,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/11/HOTSET-1024x705.jpg',
    },
    {
      id: 1,
      name: 'Сет Love',
      costOld: 700,
      cost: 630,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/10/Set-Love2-1-1-1.jpg',
    },
    {
      id: 1,
      name: 'Сет Топ-Роллы',
      costOld: 900,
      cost: 800,
      image: 'https://fixrolls.ru/wp-content/uploads/2019/07/Set-05-1.jpg',
    },
  ];
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleSection}>
        <Text style={styles.titleText}>
          Новинки
        </Text>
      </View>
      <View style={styles.newestWrapper}>
        <Carousel
          data={data}
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
        <View style={styles.buttonWrapper}>
          <AppButton title={'Перейти в каталог'}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 40,
    marginBottom: 200,
  },
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.FONT_SIZE_HEADERS,
    textTransform: 'uppercase',
  },
  newestWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
  }
});
