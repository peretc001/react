import {ModalConsumer} from "@/UI/Modal/ModalContext";

export const ModalRoot = () => (
  <ModalConsumer>
    {({ component: Component, props, closeModal }) =>
      Component ? <Component {...props} onRequestClose={closeModal} /> : null
    }
  </ModalConsumer>
);
