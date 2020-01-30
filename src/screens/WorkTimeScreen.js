import React from 'react';
import {View, ScrollView, Text, StyleSheet, Button} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';
import {screenWidth, THEME} from '../constants';

export class WorkTimeScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    const nowDay = new Date().getDay();

    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <View style={styles.wrapper}>

            <View style={styles.titleSection}>
              <Text style={styles.titleText}>ГРАФИК РАБОТЫ</Text>
              <Text style={styles.titleText}>ДОСТАВКИ</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 0 ? styles.timeListDayActive : styles.timeListDay}>Понедельник</Text>
              <Text style={nowDay === 0 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 1 ? styles.timeListDayActive : styles.timeListDay}>Вторник</Text>
              <Text style={nowDay === 1 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 2 ? styles.timeListDayActive : styles.timeListDay}>Среда</Text>
              <Text style={nowDay === 2 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 3 ? styles.timeListDayActive : styles.timeListDay}>Четверг</Text>
              <Text style={nowDay === 3 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 4 ? styles.timeListDayActive : styles.timeListDay}>Пятница</Text>
              <Text style={nowDay === 4 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 00:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 5 ? styles.timeListDayActive : styles.timeListDay}>Суббота</Text>
              <Text style={nowDay === 5 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 00:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={nowDay === 6 ? styles.timeListDayActive : styles.timeListDay}>Воскресенье</Text>
              <Text style={nowDay === 6 ? styles.timeListDayActive : styles.timeListTime}>11:00 - 22:00</Text>
            </View>

          </View>
        </ScrollView>
        <BottomCart/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginBottom: screenWidth / 3,
  },
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontFamily: THEME.FONT_FAMILY,
    fontSize: THEME.FONT_SIZE_HEADERS,
    textTransform: 'uppercase',
  },
  timeList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeListDay: {
    fontSize: THEME.FONT_SIZE_MIDDLE,
    fontFamily: THEME.FONT_FAMILY,
    color: THEME.FONT_GRAY,
  },
  timeListDayActive: {
    fontSize: THEME.FONT_SIZE_MIDDLE,
    fontFamily: THEME.FONT_FAMILY,
    color: THEME.FONT_ACCENT,
  },
  timeListSeparator: {
    marginHorizontal: 5,
    width: screenWidth / 3,
    borderRadius: 1,
    borderStyle: 'dashed',
  },
  timeListTime: {
    fontSize: THEME.FONT_SIZE_MIDDLE,
    fontFamily: THEME.FONT_FAMILY,
    color: THEME.FONT_GRAY,
  },
});
