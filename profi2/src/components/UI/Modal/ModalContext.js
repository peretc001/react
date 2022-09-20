import { createContext } from 'react';

export const ModalContext = createContext({
  component: null,
  props: {},
  openModal: () => {},
  closeModal: () => {}
});

export const ModalConsumer = ModalContext.Consumer;
