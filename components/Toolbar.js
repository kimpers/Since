/* @flow */

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Toolbar = ({ onClickAdd, onClickSettings } : {onClickAdd: () => void, onClickSettings: () => void }) => (
  <View style={styles.toolbar}>
    <Text style={styles.toolbarTitle}>Since App</Text>
  </View>
);


const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    paddingTop: 30,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 50,
    color: '#fff',
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    flex: 1
  }
});

export default Toolbar;
