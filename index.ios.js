/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Toolbar from './components/Toolbar';
import Item from './components/Item';
import AddButton from './components/AddButton';


const MOCK_ITEMS = [
  {
    type: 'superpowers',
    message: 'Went to the gym',
    lastTimestamp: Date.now() - 1000
  },
  {
    type: 'heart',
    message: 'Kissed Yitong',
    lastTimestamp: Date.now() - 3600 * 1000
  },
  {
    type: 'phone',
    message: 'Talked to Mom',
    lastTimestamp: Date.now() - 24 * 3600 * 1000
  },
  {
    type: 'graduation-cap',
    message: 'Studied',
    lastTimestamp: Date.now() - 6 * 24 * 3600 * 1000
  },
  {
    type: 'plane',
    message: 'Traveled',
    lastTimestamp: Date.now() - 32 * 24 * 3600 * 1000
  }
];

const onClickAdd = () => {


};

const onClickSettings = () => {


};
// <Toolbar onClickAdd={onClickAdd} onClickSettings={onClickSettings} />
// left: <Icon name="ios-settings-outline" size={30} color="#000" onClick={onClickSettings} />
export default class Since extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: {
      right: <AddButton onClickAdd={onClickAdd} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          {MOCK_ITEMS.map((item, i) => <Item type={item.type} lastTimestamp={item.lastTimestamp} message={item.message} key={`item-${i}`} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  }
});

AppRegistry.registerComponent('Since', () => StackNavigator({
  Home: { screen: Since }
}));
