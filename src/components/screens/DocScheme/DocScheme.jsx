import React, { useState } from "react";
import styles from "./DocScheme.module.scss";

import Map from "../../../assets/images/docMap.svg";


import Anchor from "../../../assets/images/doc-scheme-icons/anchor.svg";
import Stair from "../../../assets/images/doc-scheme-icons/stair.svg";
import Slip from "../../../assets/images/doc-scheme-icons/slip.svg";
import Skud from "../../../assets/images/doc-scheme-icons/skud.svg";
import Energy from "../../../assets/images/doc-scheme-icons/energy.svg";
import Light from "../../../assets/images/doc-scheme-icons/light.svg";
import Safty from "../../../assets/images/doc-scheme-icons/safty.svg";
import Camera from "../../../assets/images/doc-scheme-icons/camera.svg";

import Chip from "../../../assets/images/chip.svg";
import LabelDecor from "../../../assets/images/label-decor.svg";
import GreyWaves from "../../../assets/images/grey-waves.svg";
import ButtonPrice from "../../elements/ButtonPrice/ButtonPrice";
import Modal from "../../elements/Modal/Modal";

const DocScheme = () => {
  const [isShowModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.wrap} id="docScheme">
      {isShowModal && <Modal withBG={true} close={() => setShowModal(false)} />}
        <div className={styles.map}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>СХЕМА ПРИЧАЛА</h2>
            <ButtonPrice text={"Рассчитать стоимость"} openModal={setShowModal} />
          </div>
          <div>
            <img className={styles.mapImg} src={Map} alt="" />
            {/* <img className={styles.greyWaves} src={GreyWaves} alt="" /> */}
          </div>
        </div>
        <div className={styles.legend}>
          <h2>ОСНАЩЕНИЕ ПРИЧАЛА</h2>
          <ul>
            <li>
              <img src={Anchor} alt="" />
              <span>7 линий стоянки <br /> 2 гостевые <br /> для парковки</span>
            </li>
            <li>
              <img src={Stair} alt="" />
              <span>Сходни–лестницы <br /> к воде</span>
            </li>
            <li>
              <img src={Slip} alt="" />
              <span>Оборудованный <br /> слип</span>
            </li>
            <li>
              <img src={Skud} alt="" />
              <span>Контроль доступа <br /> (СКУД) к лодкам</span>
            </li>
            <li>
              <img src={Energy} alt="" />
              <span>Сервисные колонки <br /> (вода, электричество)</span>
            </li>
            <li>
              <img src={Light} alt="" />
              <span>Вечернее <br /> освещение</span>
            </li>
            <li>
              <img src={Safty} alt="" />
              <span>Стойки <br /> безопасности</span>
            </li>
            <li>
              <img src={Camera} alt="" />
              <span>Видеонаблюдение <br /> и охрана</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DocScheme;
