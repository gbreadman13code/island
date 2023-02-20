import React, { useEffect, useState } from "react";

import styles from "./MainScreen.module.scss";
import Header from "../../Header/Header";
import Container from "../../elements/Container/Container";
import Temperature from "../../elements/Temperature/Temperature";
import { useLocation } from 'react-router-dom';

import { ReactComponent as MainTitle } from "../../../assets/images/main-title.svg";
import { useSelector } from 'react-redux';

const MainScreen = () => {
  const [airTemperature, setAirTemperature] = useState(false) 
  const [waterTemperature, setWaterTemperature] = useState(false) 

  const airTemperatureRedux = useSelector(state => state.weather.air_temperature)
  const waterTemperatureRedux = useSelector(state => state.weather.water_temperature)

  useEffect(() => {
    if (!airTemperatureRedux) return;
    setAirTemperature(airTemperatureRedux)
  }, [airTemperatureRedux])

  useEffect(() => {
    if (!waterTemperatureRedux) return;
    setWaterTemperature(waterTemperatureRedux)
  }, [waterTemperatureRedux])

  return (
    <div className={styles.mainScreen}>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Header isMainPage={true} />
          <div className={styles.text}>
            <div>
              <MainTitle />
              {/* <h1>ОСТРОВ</h1>
              <h2>Речной клуб</h2> */}
              <p>Современная лодочная станция на Енисее</p>
              <p>Акватория Абаканской протоки</p>
              <p>Место для прогулок и отдыха</p>
            </div>
          </div>
          <span></span>
          <Temperature cloud={airTemperature} water={waterTemperature} />
        </div>
      </Container>
    </div>
  );
};

export default MainScreen;
