import React from 'react';
import {Pressable, TextInput} from 'react-native';
import {SearchSvg} from '../../assets/svg';
import {styles} from './styles';

const Search = () => {
  return (
    <Pressable style={styles.searchContainer}>
      <SearchSvg />
      <TextInput style={styles.text} placeholder={'Enter your destination'} />
    </Pressable>
  );
};

export default Search;
