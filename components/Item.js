/* @flow */
import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

// TODO: replace with moment plugin for printing durations
const createDurationText = (duration) => {
  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  let durationString = '';
  if (years) {
    durationString += `${years} years `;
  }

  if (months) {
    durationString += `${months} months `;
  }

  if (days) {
    durationString += `${days} days `;
  }

  if (hours) {
    durationString += `${hours} hours `;
  }

  if (minutes) {
    durationString += `${minutes} minutes `;
  }

  if (!durationString && seconds) {
    durationString += `${seconds} seconds `;
  }

  return durationString.trim();
};

const Item = ({ type, message, lastTimestamp } : { type: string, message: string, lastTimestamp: number }): Object => {
  const duration = moment.duration(Date.now()).subtract(lastTimestamp);

  return (
    <View style={styles.container}>
      <Icon
        name={type}
        size={20}
        color="#000"
      />
      <Text>{message}</Text>
      <Text>{createDurationText(duration)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  }

});

export default Item;
