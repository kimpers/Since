import React from 'react';
import {
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddButton = (onClickAdd: () => void) => (
  <Icon
    name="ios-add-circle-outline"
    size={35}
    color="#000"
    onClick={onClickAdd}
    style={styles.icon}
  />
);

const styles = StyleSheet.create({
  icon: {
    marginRight: 10
  }
});

export default AddButton;
