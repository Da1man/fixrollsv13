import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {screenWidth, THEME} from '../constants';

export const ImageSlider = () => {
  return (
    <View style={styles.wrapper}>
      <SliderBox
        images={[
          'https://fixrolls.ru/wp-content/uploads/2019/11/1080_FIXROLLS_HOTSET.jpg',
          'https://fixrolls.ru/wp-content/uploads/2019/09/1080_FIXROLLS_LOVESET_mob-1.jpg',
          'https://fixrolls.ru/wp-content/uploads/2019/07/photo_2019-07-01_11-29-28.jpg',
        ]}
        sliderBoxHeight={screenWidth}
        dotColor={THEME.MAIN_COLOR}
        inactiveDotColor={THEME.BACKGROUND_GRAY}
        autoplay={true}
        circleLoop={true}
        imageLoadingColor={THEME.MAIN_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
