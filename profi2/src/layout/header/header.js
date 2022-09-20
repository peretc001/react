import React, {useCallback, useState} from 'react';
import Link from "next/link";

import OpenModal from "@/UI/Modal/OpenModal";
import MobileMenu from "../mobileMenu/mobileMenu";

import cns from "classnames";
import styles from './header.module.scss';
import {useStore} from "@/hooks/useStore";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMobileMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])

  const {location} = useStore(state => state.locationReducer)

  return (
    <header className={styles.header}>
      <div className='container d-flex'>
        <div
          className={cns(styles.hamburger, { [styles.active]: isOpen })}
          onClick={toggleMobileMenu}>
          <span />
        </div>

        <Link href='/'>
          <a className={styles.name}>Top-Profi.ru</a>
        </Link>

        <div className={styles.city}>
          <OpenModal type={'city'}>{location.name}</OpenModal>
        </div>

        <Link href='/masters'>Все мастера</Link>

        <span className={styles.favorite}>9</span>

        <div className={styles.login}>
          <OpenModal>Вход</OpenModal>
        </div>

        <div className={styles.register}>
          <OpenModal>Регистрация</OpenModal>
        </div>

        {isOpen && <MobileMenu cityName={location.name} actionClose={toggleMobileMenu} />}
      </div>
    </header>
  );
}

export default Header;
