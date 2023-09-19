import React from 'react';
import {Pressable, Text} from 'react-native';
import {ProfileSvg} from '../../assets/svg';
import {styles} from './styles';

interface IPeople {
  setModalVisible: (value: boolean) => void;
  rooms: number;
  adults: number;
  children: number;
}
const PeopleCount = ({setModalVisible, adults, rooms, children}: IPeople) => {
  return (
    <Pressable
      onPress={() => setModalVisible(true)}
      style={styles.searchContainer}>
      <ProfileSvg />
      <Text
        style={
          styles.text
        }>{`${rooms} room  *  ${adults} adults  *  ${children} children`}</Text>
    </Pressable>
  );
};

export default PeopleCount;
