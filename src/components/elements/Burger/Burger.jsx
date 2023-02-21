import React from 'react';
import styles from './Burger.module.scss';
import { ReactComponent as Anchor } from '../../../assets/images/anchor.svg';

// import className from

const Burger = ({active, setActive}) => {
  console.log()
  return (

    <button className={active ? `${styles.burger} ${styles.burger__pressed}` : styles.burger}
      onClick={(() => {active ? setActive(false) : setActive(true)})}>

        {active ?
        <div>
          <span />
          <span />
        </div>

        : <Anchor />}





    </button>
  );
};

export default Burger;