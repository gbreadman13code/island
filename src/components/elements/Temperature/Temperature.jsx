import React from "react";
import styles from "./Temperature.module.scss";

import CloudIcon from "../../../assets/images/cloud.svg";
import DribIcon from "../../../assets/images/drib.svg";

const Temperature = ({ cloud, water }) => {
  return (
    (cloud || water) && (
      <div className={styles.wrap}>
        {cloud && (
          <div className={styles.item}>
            <span>{cloud}°С</span>
            <img src={CloudIcon} alt="Воздух" />
          </div>
        )}
        {water && (
          <div className={styles.item}>
            <span>{water}°С</span>
            <img src={DribIcon} alt="Вода" />
          </div>
        )}
      </div>
    )
  );
};

export default Temperature;
