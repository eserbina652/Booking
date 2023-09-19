import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  customBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {fontSize: 16, fontWeight: '500'},
  blockWrap: {flexDirection: 'row', alignItems: 'center', gap: 10},
  btn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: '#BEBEBE',
    backgroundColor: '#E0E0E0',
    borderWidth: 1,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 6,
  },
  value: {color: 'black'},
});
