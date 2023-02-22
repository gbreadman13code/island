import React from 'react';

import styles from './Footer.module.scss';

// import Logo from '../Logo/Logo';
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import FooterDecor from '../../../assets/images/footer-decor.svg';

import Phone from '../../../assets/images/contacts-icons/phone.svg';
import Email from '../../../assets/images/contacts-icons/email.svg';
import Location from '../../../assets/images/contacts-icons/location.svg';
import Telegram from '../../../assets/images/contacts-icons/telegram.svg';
import Whatsap from '../../../assets/images/contacts-icons/whatsap.svg';


const Footer = () => {
  return (
    <div className={styles.footer} id='contacts'>
      <div className={styles.text}>
        <Logo />
        <div className={styles.line_between}></div>
        <ul>
          <li> <img src={Phone} alt="" /> <a href="tel:+73912546200">+7 (391) 254-62-00</a></li>
          <li> <img src={Email} alt="" /> <a href="mailto:marketing@ostrovkrsk.ru">marketing@ostrovkrsk.ru</a></li>
          <li> <img src={Location} alt="" /> <a>г. Красноярск, <br /> ул. остров Отдыха</a></li>
          <div className={styles.socials}>
            <li><a href="https://t.me/ostrovkrsk" target='_black'><img src={Telegram} alt="" /></a></li>
            <li><a href="#"  target='_black'><img src={Whatsap} alt="" /></a></li>
          </div>
        </ul>
      </div>
      <div className={styles.decor}>
        <img src={FooterDecor} alt="" />
      </div>
    </div>
  )
}

export default Footer
