import React, {useLayoutEffect} from 'react';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BookingSvg} from '../assets/svg';
import Header from '../components/Header';
import Search from '../components/searchBlock/Search';
import Date from '../components/searchBlock/Date';
import PeopleCount from '../components/searchBlock/PeopleCount';

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#003580',
        height: 100,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => (
        <BookingSvg color={'white'} style={{marginRight: 12}} />
      ),
    });
  }, []);
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.pressableBlock}>
          <Search />
          <Date />
          <PeopleCount />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pressableBlock: {
    borderWidth: 3,
    borderColor: '#FFC72C',
    borderRadius: 6,
    margin: 20,
  },
});
