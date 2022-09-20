import React, {useRef} from 'react';

import useClickOutside from '@/hooks/useClickOutside'

import styles from './mobileMenu.module.scss'
import OpenModal from "@/UI/Modal/OpenModal";

const MobileMenu = ({cityName, actionClose}) => {
  const menuRef = useRef()

  useClickOutside(menuRef, actionClose)

  return (
    <div ref={menuRef} className={styles.mobileMenu}>
      <div className={styles.city}>
        <OpenModal type={'city'}><span onClick={actionClose}>{cityName}</span></OpenModal>
      </div>

      <div className={styles.action}>
        <div className={styles.login}>
          <OpenModal>Вход</OpenModal>
        </div>

        <div className={styles.register}>
          <OpenModal>Регистрация</OpenModal>
        </div>
      </div>

      <ul className={styles.menu}>
        <li className={styles.favorite}>Избранное</li>
        <li className={styles.general}>Главная</li>
        <li className={styles.catalog}>Каталог мастеров</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
