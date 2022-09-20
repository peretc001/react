import React from 'react';
import {ModalConsumer} from "@/UI/Modal/ModalContext";

import Modal from "@/UI/Modal/Modal";
import CityModal from "@/UI/Modal/components/CityModal";

const OpenModal = ({type, children}) => {

  const getComponent = (modalType) => {
    switch (modalType) {
      case 'city':
        return CityModal
      default:
        return Modal
    }
  }

  return (
    <ModalConsumer>
      {({ openModal, closeModal }) => (
        <span onClick={() => openModal(getComponent(type), { closeModal: closeModal })}>{children}</span>
      )}
    </ModalConsumer>
  );
};

export default OpenModal;
