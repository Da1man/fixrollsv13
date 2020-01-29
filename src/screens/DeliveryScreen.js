import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';
import {screenWidth, THEME} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ZeroRub} from '../components/DeliveryItems/ZeroRub';
import {OneHour} from '../components/DeliveryItems/OneHour';
import {FivehundRub} from '../components/DeliveryItems/FivehundRub';
import {WorkTime} from '../components/DeliveryItems/WorkTime';


export class DeliveryScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.titleSection}>
              <Text style={styles.titleText}>Доставка и оплата</Text>
            </View>
            <ZeroRub />
            <OneHour />
            <FivehundRub />
            <WorkTime />


            <View style={styles.quoteWrapper}>
              <View style={styles.quoteIconWrapper}>
                <Ionicons name='ios-gift'
                      size={50}
                      color={THEME.FONT_ACCENT}
                 />
              </View>
              <View style={styles.quoteTextWrapper}>
                <Text style={styles.quoteText}>С каждым заказом вы получаете:</Text>
                <Text style={styles.quoteText}>Палочки, салфетки, зубочистки</Text>
                <Text style={styles.quoteText}>Соевый соус (50 мл)</Text>
                <Text style={styles.quoteText}>Имбирь (25 гр)</Text>
                <Text style={styles.quoteText}>Васаби (10 г)</Text>
              </View>
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
    paddingHorizontal: 10,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
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
  quoteWrapper: {
    flexDirection: 'row',
    width: screenWidth / 1.3,
    padding: 10,
  },
  quoteIconWrapper: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quoteText: {
    fontSize: THEME.FONT_SIZE_MIDDLE,
    flex: 1,
    flexWrap: 'wrap',
    fontStyle: 'italic',
    paddingBottom: 5,
  },
});
