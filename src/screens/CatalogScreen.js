import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';
import {screenWidth, THEME} from '../constants';
import {CatalogItem} from '../components/CatalogItem';

export class CatalogScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.titleSection}>
              <Text style={styles.titleText}>Каталог товаров</Text>
            </View>
            <View style={styles.listWrapper}>
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/10/Set-Love2-1-1-1.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/06/Apelsin-Roll-1.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Lava.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/Filadelfiya-MIX.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/Filadelfiya-LITE.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/Taj-Hot.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/06/Apelsin-Roll-1.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Lava.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/Filadelfiya-MIX.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/Filadelfiya-LITE.jpg'} />
              <CatalogItem image={'https://fixrolls.ru/wp-content/uploads/2019/03/Taj-Hot.jpg'} />
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
  listWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
