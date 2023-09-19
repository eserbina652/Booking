import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BookingSvg} from '../assets/svg';
import Header from '../components/Header';
import Search from '../components/searchBlock/Search';
import Date from '../components/searchBlock/Date';
import PeopleCount from '../components/searchBlock/PeopleCount';
import StandardBtn from '../components/btn/StandardBtn';
import BottomModalComponent from '../components/modals/BottomModalComponent';

const Home = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
      headerTitleStyle: styles.headerTitleStyle,
      headerStyle: styles.headerStyle,
      headerRight: () => (
        <BookingSvg color={'white'} style={{marginRight: 12}} />
      ),
    });
  }, []);
  return (
    <>
      <View>
        <Header />
        <ScrollView>
          <View style={styles.pressableBlock}>
            <Search />
            <Date />
            <PeopleCount
              rooms={rooms}
              adults={adults}
              children={children}
              setModalVisible={setModalVisible}
            />
            <StandardBtn text={'Search'} />
          </View>
        </ScrollView>
      </View>
      <BottomModalComponent
        rooms={rooms}
        setRooms={setRooms}
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
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
});
