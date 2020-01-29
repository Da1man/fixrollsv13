import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';
import {screenWidth, THEME} from '../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

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
            <View style={styles.deliveryItemWrapper}>
              <View style={styles.iconWrapper}>
                <SimpleIcon name='emotsmile'
                      size={70}
                      color={THEME.FONT_ACCENT}
                />
              </View>
              <View style={styles.itemTitleWrapper}>
                <Text style={styles.itemTitleText}>0 РУБЛЕЙ</Text>
              </View>
              <View style={styles.itemDescWrapper}>
                <Text style={styles.itemDescText}>Вы оплачивайте только заказ</Text>
                <Text style={styles.itemDescText}>Доставку мы осуществляем бесплатно, при исполнении минимальной суммы заказа</Text>
              </View>
            </View>


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


            <View style={styles.deliveryItemWrapper}>
              <View style={styles.iconWrapper}>
                <SimpleIcon name='emotsmile'
                      size={70}
                      color={THEME.FONT_ACCENT}
                />
              </View>
              <View style={styles.itemTitleWrapper}>
                <Text style={styles.itemTitleText}>500 РУБЛЕЙ</Text>
              </View>
              <View style={styles.itemDescWrapper}>
                <Text style={styles.itemDescText}>Минимальная сумма заказа:</Text>
                <Text style={styles.itemDescText}>г. Кимры/Савелово - 500 рублей</Text>
                <Text style={styles.itemDescText}>Деревни/Садовые товарищества/ДОК —  1000 рублей</Text>
              </View>
            </View>


            <View style={styles.deliveryItemWrapper}>
              <View style={styles.iconWrapper}>
                <SimpleIcon name='clock'
                      size={70}
                      color={THEME.FONT_ACCENT}
                />
              </View>
              <View style={styles.itemTitleWrapper}>
                <Text style={styles.itemTitleText}>ВРЕМЯ РАБОТЫ</Text>
              </View>
              <View style={styles.itemDescWrapper}>
                <Text style={styles.itemDescText}>Время работы доставки:</Text>
                <Text style={styles.itemDescText}>вс-чт 11.00-22.00</Text>
                <Text style={styles.itemDescText}>пт, сб 11.00-00.00</Text>
              </View>
            </View>


            <View style={styles.quoteWrapper}>
              <View style={styles.quoteIconWrapper}>
                <Icon name='quote-right'
                      size={30}
                      color={THEME.FONT_ACCENT}
                 />
              </View>
              <Text>С каждым заказом вы получаете палочки, салфетки, зубочистки, соевый соус (50 мл), имбирь (25 гр), васаби (10 г)</Text>
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
  iconWrapper: {
  },
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
  quoteWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  quoteIconWrapper: {

  },
});
