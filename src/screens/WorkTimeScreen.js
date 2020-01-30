import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';
import {screenWidth, THEME} from '../constants';

export class WorkTimeScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <View style={styles.wrapper}>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Понедельник</Text>
              <Text style={styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Вторник</Text>
              <Text style={styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Среда</Text>
              <Text style={styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Четверг</Text>
              <Text style={styles.timeListTime}>11:00 - 22:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Пятница</Text>
              <Text style={styles.timeListTime}>11:00 - 00:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Суббота</Text>
              <Text style={styles.timeListTime}>11:00 - 00:00</Text>
            </View>

            <View style={styles.timeList}>
              <Text style={styles.timeListDay}>Воскресенье</Text>
              <Text style={styles.timeListTime}>11:00 - 22:00</Text>
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
  timeList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeListDay: {
    fontSize: THEME.FONT_SIZE_MIDDLE,
  },
  timeListSeparator: {
    marginHorizontal: 5,
    width: screenWidth / 3,
    borderRadius: 1,
    borderStyle: 'dashed',
  },
  timeListTime: {
    fontSize: THEME.FONT_SIZE_MIDDLE,
  },

});
