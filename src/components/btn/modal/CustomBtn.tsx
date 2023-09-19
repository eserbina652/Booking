import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

interface IBtn {
  blockName: string;
  blockValue: number;
  onChange: (value: number) => void;
}
const CustomBtn = ({blockName, blockValue, onChange}: IBtn) => {
  return (
    <View style={styles.customBtn}>
      <Text style={styles.title}>{blockName}</Text>
      <Pressable style={styles.blockWrap}>
        <Pressable style={styles.btn} onPress={() => onChange(blockValue - 1)}>
          <Text style={styles.btnText}>-</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.value}>{blockValue}</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => onChange(blockValue + 1)}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default CustomBtn;
