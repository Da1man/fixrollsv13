import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {screenWidth, THEME} from '../../constants';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

export class OneHour extends React.Component {
  render() {
    return (
      <>
        <View style={styles.deliveryItemWrapper}>
          <View style={styles.iconWrapper}>
            <SimpleIcon name='clock'
                        size={70}
                        color={THEME.FONT_ACCENT}
            />
          </View>
          <View style={styles.itemTitleWrapper}>
            <Text style={styles.itemTitleText}>1 ЧАС</Text>
          </View>
          <View style={styles.itemDescWrapper}>
            <Text style={styles.itemDescText}>Время доставки по городу до 1 часа.</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: screenWidth / 3,
  },
  deliveryItemWrapper: {
    backgroundColor: THEME.BACKGROUND_GRAY,
    width: screenWidth / 1.3,
    height: screenWidth / 1.3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    marginBottom: 30,
  },
  iconWrapper: {},
  itemTitleWrapper: {
    marginVertical: 20,
  },
  itemTitleText: {
    fontSize: THEME.FONT_SIZE_LARGE,
    fontFamily: THEME.FONT_FAMILY,
  },
  itemDescWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDescText: {
    textAlign: 'center',
    fontSize: THEME.FONT_SIZE_MIDDLE,
    marginBottom: 10,
  },
});
