import React, {useEffect, useRef} from 'react';

import styles from './Modal.module.scss'
import useClickOutside from "@/hooks/useClickOutside";

const Modal = ({closeModal, children}) => {
  const modalBodyRef = useRef()

  const stop = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 27 && closeModal) {
      closeModal()
      stop(event)
    }
  }

  useClickOutside(modalBodyRef, closeModal)

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('disable-scroll')
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('disable-scroll')
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.body} ref={modalBodyRef}>
        <span className={styles.close} onClick={closeModal}>x</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
