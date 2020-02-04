import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {BottomCart} from '../components/BottomCart';
import {screenWidth, THEME} from '../constants';
import {CatalogItem} from '../components/CatalogItem';
import {connect} from 'react-redux';

class CatalogScreen extends React.Component {
  componentDidMount() {
  }

  render() {
    let renderProducts = this.props.products.map(p => <CatalogItem image={p.image} key={p.id} />)

    return (
      <View>
        <Header navigation={this.props.navigation}/>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.titleSection}>
              <Text style={styles.titleText}>Каталог товаров</Text>
            </View>
            <View style={styles.listWrapper}>
              {renderProducts}
            </View>
          </View>
        </ScrollView>
        <BottomCart/>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
    products: state.catalog.products,
    isFetching: state.catalog.isFetching,
  };
};

export default connect(
  mapStateToProps,
  {})
(CatalogScreen);

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
