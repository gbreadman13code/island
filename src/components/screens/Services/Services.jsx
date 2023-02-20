import React from "react";
import styles from "./Services.module.scss";
import Container from "../../elements/Container/Container";

import ParkingIcon from '../../../assets/images/second-screen-icons/anchor.svg'
import GarageIcon from '../../../assets/images/second-screen-icons/garage.svg'
import ServicesIcon from '../../../assets/images/second-screen-icons/service.svg'
import SlipIcon from '../../../assets/images/second-screen-icons/slip.svg'
import GasIcon from '../../../assets/images/second-screen-icons/gas.svg'
import WalkIcon from '../../../assets/images/second-screen-icons/cheel.svg'


const Services = () => {
  return (
    <Container>
      <div className={styles.wrap} id="about">
        <div><img src={ParkingIcon} alt="" /><span><strong>120-130 мест</strong> причал-стоянка <br />на воде</span></div>
        <div><img src={GarageIcon} alt="" /><span><strong>900 м2</strong> теплый ангар <br /> для хранения</span></div>
        <div><img src={ServicesIcon} alt="" /><span><strong>{'>'} 100 услуг</strong> сервис для лодок <br /> и моторов</span></div>
        <div><img src={SlipIcon} alt="" /><span><strong>21 m x 6 m</strong> Оборудованный <br /> слип</span></div>
        <div><img src={GasIcon} alt="" /><span><strong>1–ая в регионе </strong> Плавучая<br /> Заправочная <br /> станция</span></div>
        <div><img src={WalkIcon} alt="" /><span><strong>Отдых</strong> Речные <br /> прогулки</span></div>
      </div>
    </Container>
  );
};

export default Services;
