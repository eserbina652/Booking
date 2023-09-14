import React from 'react';
import {StyleSheet, View} from 'react-native';
import Category from './btn/Category';
import {CarSvg, PlaneSvg, StaysSvg, TaxiSvg} from '../assets/svg';

const Header = () => {
  return (
    <View style={styles.header}>
      <Category svgComponent={<StaysSvg />} text={'stays'} />
      <Category svgComponent={<PlaneSvg />} text={'Flights'} />
      <Category svgComponent={<CarSvg />} text={'Car Rental'} />
      <Category svgComponent={<TaxiSvg />} text={'Taxi'} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#003580',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
