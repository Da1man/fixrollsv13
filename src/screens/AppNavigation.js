import React from 'react';
import {Animated, Easing} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';

import { fromLeft } from 'react-navigation-transitions';

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
    initialRouteName: 'Main',
    transitionConfig: () => fromLeft(),
  });

export const AppNavigation = createAppContainer(MainNavigator);
