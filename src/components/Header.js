import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {screenWidth, THEME} from '../constants';
import {AnimatedSVGPath} from 'react-native-svg-animations';
import Menu from '../../assets/images/menu-icon.svg';
import Logo from '../../assets/images/logo.svg';
import Clock from '../../assets/images/clock-icon.svg';
import Phone from '../../assets/images/phone-icon.svg';

const ClockIcon = () => {
  return <View >
    <AnimatedSVGPath
      strokeColor={'#4299A1'}
      duration={7000}
      strokeWidth={1}
      height={20}
      width={150}
      scale={2}
      delay={0}
      d={Loader}
      loop={true}
    />
  </View>
}

export const Header = ({navigation}) => {

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.menubox} onPress={() => navigation.toggleDrawer()}>
        <Menu width={42}/>
      </TouchableOpacity>
      <View style={styles.logobox}>
        <Logo width={screenWidth / 3.5}/>
      </View>
      <TouchableOpacity style={styles.timebox}>
        <Clock/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.phonebox}>
        <Phone/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    borderColor: THEME.FONT_GRAY_LIGHT,
    borderBottomWidth: 1,
  },
  menubox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 5.3,
  },
  logobox: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: screenWidth / 1.85,
    paddingLeft: 15,
  },
  timebox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 7.5,
  },
  phonebox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth / 7.5,
  },
});
