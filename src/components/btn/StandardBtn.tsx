import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface IStandard {
  text: string;
  onClick?: (value: boolean) => void;
}
const StandardBtn = ({text, onClick}: IStandard) => {
  const handleClick = () => {
    if (onClick) {
      onClick(false);
    }
  };
  return (
    <TouchableOpacity
      onPress={onClick && handleClick}
      style={styles.search_btn}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default StandardBtn;

const styles = StyleSheet.create({
  search_btn: {
    paddingHorizontal: 10,
    borderColor: '#FFC72C',
    borderWidth: 2,
    paddingVertical: 15,
    backgroundColor: '#2a52be',
  },
  text: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    fontSize: 15,
  },
});
