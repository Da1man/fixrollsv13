import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {MainScreen} from './MainScreen';
import {CatalogScreen} from './CatalogScreen';
import {WorkTimeScreen} from './WorkTimeScreen';
import {CallBackScreen} from './CallBackScreen';
import {DeliveryScreen} from './DeliveryScreen';
import {THEME} from '../constants';

const MainNavigator = createDrawerNavigator({
    Main: {
      screen: MainScreen,
      navigationOptions: {
        drawerLabel: 'Главная',
        // drawerIcon: <Icon name={'ios-star'}/>
      },
    },
    Catalog: {
      screen: CatalogScreen,
      navigationOptions: {
        drawerLabel: 'Каталог',
      },
    },
    Time: {
      screen: WorkTimeScreen,
      navigationOptions: {
        drawerLabel: 'Время работы',
      },
    },
    Callback: {
      screen: CallBackScreen,
      navigationOptions: {
        drawerLabel: 'Заказать звонок',
      },
    },
    Delivery: {
      screen: DeliveryScreen,
      navigationOptions: {
        drawerLabel: 'Доставка и оплата',
      },
    },
  },
  {
    drawerType: 'slide',
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: THEME.FONT_FAMILY,
      },
    },
  });

export const AppNavigation = createAppContainer(MainNavigator);
