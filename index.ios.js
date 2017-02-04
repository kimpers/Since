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

import Toolbar from './components/Toolbar';
import Item from './components/Item';

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

export default class Since extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar onClickAdd={onClickAdd} onClickSettings={onClickSettings} />
        <View>
          {MOCK_ITEMS.map((item, i) => <Item type={item.type} lastTimestamp={item.lastTimestamp} message={item.message} key={`item-${i}`} />)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  addButton: {
    alignSelf: 'flex-start'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('Since', () => Since);
