import React from 'react';
import anchor from '../../../assets/images/wheel-icon.svg';

import styles from './ButtonPrice.module.scss';

const ButtonPrice = ({ openModal, text }) => {
  return (
    <button className={styles.button} onClick={() => openModal(true)}><img src={anchor} alt="" /> <span>{text}</span></button>
  )
}

export default ButtonPrice
