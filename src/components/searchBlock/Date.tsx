import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {CalendarSvg} from '../../assets/svg';
import {DatePickerModal} from 'react-native-paper-dates';
import {format} from 'date-fns';
const Date = () => {
  const [range, setRange] = useState({
    startDate: undefined,
    endDate: undefined,
  });
  const [open, setOpen] = useState(false);
  const currentDateFormat = 'MMMM dd, yyyy';
  const onDismiss = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = useCallback(
    // @ts-ignore
    ({startDate, endDate}) => {
      setOpen(false);
      setRange({startDate, endDate});
    },
    [setOpen, setRange],
  );
  return (
    <>
      <TouchableOpacity
        onPress={() => setOpen(true)}
        style={styles.searchContainer}>
        <CalendarSvg />
        <Text style={[styles.dateText, styles.text]}>
          {range?.startDate && range?.endDate
            ? `${format(range.startDate, currentDateFormat)} -> ${format(
                range.endDate,
                currentDateFormat,
              )}`
            : 'Pick range'}
        </Text>
      </TouchableOpacity>
      <DatePickerModal
        locale="en-GB"
        mode="range"
        visible={open}
        onDismiss={onDismiss}
        startDate={range.startDate}
        endDate={range.endDate}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default Date;
