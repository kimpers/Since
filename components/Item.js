/* @flow */
import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const Item = ({ type, message, lastTimestamp } : { type: string, message: string, lastTimestamp: number }) => {
  const duration = moment.duration(lastTimestamp).subtract(Date.now());

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Icon
          name={type}
          size={50}
          color="#000"
        />
      </View>
      <View style={styles.text}>
        <Text>{message}</Text>
        <Text>{duration.humanize(true)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  text: {
    marginLeft: 10
  },
  iconWrapper: {
    width: 75,
    alignItems: 'center'
  }
});

export default Item;
