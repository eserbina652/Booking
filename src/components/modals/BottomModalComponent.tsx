import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet} from 'react-native';
import {
  ModalContent,
  SlideAnimation,
  BottomModal,
  ModalFooter,
  ModalButton,
  ModalTitle, // @ts-ignore
} from 'react-native-modals';
import CustomBtn from '../btn/modal/CustomBtn';

interface IModal {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  rooms: number;
  adults: number;
  children: number;
  setRooms: Dispatch<SetStateAction<number>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setChildren: Dispatch<SetStateAction<number>>;
}
const BottomModalComponent = ({
  modalVisible,
  setModalVisible,
  rooms,
  children,
  adults,
  setRooms,
  setAdults,
  setChildren,
}: IModal) => {
  return (
    <BottomModal
      swipeTreshold={200}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      swipeDirection={['up', 'down']}
      footer={
        <ModalFooter>
          <ModalButton
            text="Apply"
            style={styles.modalBtn}
            onPress={() => setModalVisible(!modalVisible)}
          />
        </ModalFooter>
      }
      modalTitle={
        <ModalTitle
          title="Select rooms & guests"
          modalAnimations={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
        />
      }
      onHardwareBackPress={() => setModalVisible(!modalVisible)}
      visible={modalVisible}
      onTouchOutside={() => setModalVisible(!modalVisible)}>
      <ModalContent style={styles.modalContent}>
        <CustomBtn blockName={'Rooms'} blockValue={rooms} onChange={setRooms} />
        <CustomBtn
          blockName={'Adults'}
          blockValue={adults}
          onChange={setAdults}
        />
        <CustomBtn
          blockName={'Children'}
          blockValue={children}
          onChange={setChildren}
        />
      </ModalContent>
    </BottomModal>
  );
};

export default BottomModalComponent;
const styles = StyleSheet.create({
  modalBtn: {
    color: 'white',
    backgroundColor: '#003580',
  },
  modalContent: {width: '100%', height: 200, gap: 30, marginVertical: 20},
});
