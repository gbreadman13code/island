import React from "react";
import styles from "./LoaderScreen.module.scss";

import { ReactComponent as Logo } from "../../../assets/images/LoaderScreenElements/logo.svg";
import { ReactComponent as WaveRight } from "../../../assets/images/LoaderScreenElements/wave-right.svg";
import { ReactComponent as WaveLeft } from "../../../assets/images/LoaderScreenElements/wave-left.svg";
import BoatRight from "../../../assets/images/LoaderScreenElements/boat-right.svg";
import BoatLeft1 from "../../../assets/images/LoaderScreenElements/boat-left1.svg";
import BoatLeft2 from "../../../assets/images/LoaderScreenElements/boat-left2.svg";

const LoaderScreenMobile = () => {
  return (
    <div className={styles.wrapMobile}>
        <div></div>
      <div className={styles.graphics}>
        <div className={`${styles.boat} ${styles.boatLeft1}`}>
            <img src={BoatLeft1} alt="" />
        </div>
        <div className={`${styles.boat} ${styles.boatLeft2}`}>
            <img src={BoatLeft2} alt="" />
        </div>
        {/* <img src={Logo} alt="" /> */}
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.opened}>
        <div></div>
        <p>ОТКРЫТИЕ В МАЕ 2023</p>
        <div></div>
      </div>
        <div className={`${styles.boat} ${styles.boatRight}`}>
            <img src={BoatRight} alt="" />
        </div>
        

        <div className={styles.waves_right}>
          <WaveRight className={styles.wave1} />
          <WaveRight className={styles.wave2} />
          <WaveRight className={styles.wave3} />
          <WaveRight className={styles.wave4} />
          <WaveRight className={styles.wave5} />
        </div>
      </div>
      
      <div></div>
    </div>
  );
};

export default LoaderScreenMobile;
