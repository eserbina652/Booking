import React, {ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface ICategory {
  svgComponent: ReactNode;
  text: string;
}
const Category = ({svgComponent, text}: ICategory) => {
  return (
    <Pressable style={styles.pressable}>
      {svgComponent}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderColor: 'rgb(255,255,255)',
    borderWidth: 1,
    borderRadius: 25,
    padding: 8,
  },
  text: {
    color: 'rgb(255,255,255)',
  },
});
