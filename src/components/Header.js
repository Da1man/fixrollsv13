import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {screenWidth} from '../constants';
import Menu from '../../assets/images/menu-icon.svg';
import Logo from '../../assets/images/logo.svg';
import Clock from '../../assets/images/clock-icon.svg';
import Phone from '../../assets/images/phone-icon.svg';

export const Header = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.menubox}>
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
    height: 52,
    display: 'flex',
    flexDirection: 'row',
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
