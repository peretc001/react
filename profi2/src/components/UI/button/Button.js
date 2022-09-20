import React from 'react';
import cns from 'classnames';

import {THEME_SOLID, THEME_OUTLINE, THEME_GREEN_OUTLINE, THEME_GREEN_SOLID} from "@/constants/index";

import styles from './Button.module.scss';

const Button = ({className, icon, tag = 'button', href = '/', target = '', theme = THEME_SOLID, onClick, children}) => {

  const convertThemeToClass = theme => {
    const map = {
      [THEME_SOLID]: styles.ButtonSolid,
      [THEME_OUTLINE]: styles.ButtonOutline,
      [THEME_GREEN_OUTLINE]: styles.ButtonGreenOutline,
      [THEME_GREEN_SOLID]: styles.ButtonGreenSolid,
    }
    return map[theme] || styles.ButtonSolid
  }

  return (
    <>
      {tag === 'link' && (
        <a className={cns(styles.Button, convertThemeToClass(theme), className)} href={href} target={target} onClick={onClick}>
          {icon && <span className={styles.icon}><i className={icon}  /></span>}
          {children}
        </a>
      )}

      {tag === 'button' && (
        <button className={cns(styles.Button, convertThemeToClass(theme), className)} onClick={onClick}>
          {icon && <span className={styles.icon}><i className={icon}  /></span>}
          {children}
        </button>
      )}
      </>
  );
};

export default Button;
