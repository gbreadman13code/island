import React from 'react';
import styles from './Burger.module.scss';
import { ReactComponent as Anchor } from '../../../assets/images/anchor.svg';
import AnchorColor from '../../../assets/images/icons/burger-color-anchor.svg';
import { useLocation } from 'react-router-dom';

// import className from

const Burger = ({active, setActive}) => {
  const location = useLocation()
  return (

    <button className={active ? `${styles.burger} ${styles.burger__pressed}` : styles.burger}
      onClick={(() => {active ? setActive(false) : setActive(true)})}>

        {active ?
        <div>
          <span />
          <span />
        </div>

        : location.pathname.includes('/news') ? <img src={AnchorColor} alt="" /> : <Anchor />}





    </button>
  );
};

export default Burger;