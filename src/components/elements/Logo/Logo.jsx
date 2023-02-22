import React from 'react';
import styles from './Logo.module.scss';
import LogoIcon from '../../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoIcon} alt="" />
    </div>
  )
}

export default Logo
