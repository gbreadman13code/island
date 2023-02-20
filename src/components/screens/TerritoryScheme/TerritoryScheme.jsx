import React, { useEffect, useRef, useState } from "react";
import styles from "./TerritoryScheme.module.scss";

import Map from "../../../assets/images/map.png";

// import { ReactComponent as Visit } from "../../../assets/images/territory-scheme-icons/visit.svg";

// Legends icons
import Kpp from "../../../assets/images/territory-scheme-icons/kpp.svg";
import Visit from "../../../assets/images/territory-scheme-icons/visit.svg";
import Services from "../../../assets/images/territory-scheme-icons/services.svg";
import Garage from "../../../assets/images/territory-scheme-icons/garage.svg";
import Club from "../../../assets/images/territory-scheme-icons/club.svg";
import Seing from "../../../assets/images/territory-scheme-icons/seing.svg";
import Slip from "../../../assets/images/territory-scheme-icons/slip.svg";
import Anchor from "../../../assets/images/territory-scheme-icons/anchor.svg";
import Gas from "../../../assets/images/territory-scheme-icons/gas.svg";

// Maps icons
import map_garage from "../../../assets/images/territory-scheme-icons/maps-icons/garage.svg";
import map_services from "../../../assets/images/territory-scheme-icons/maps-icons/services.svg";
import map_visit from "../../../assets/images/territory-scheme-icons/maps-icons/visit.svg";
import map_kpp from "../../../assets/images/territory-scheme-icons/maps-icons/kpp.svg";
import map_anchor from "../../../assets/images/territory-scheme-icons/maps-icons/anchor.svg";
import map_slip from "../../../assets/images/territory-scheme-icons/maps-icons/slip.svg";
import map_seing from "../../../assets/images/territory-scheme-icons/maps-icons/seing.svg";
import map_club from "../../../assets/images/territory-scheme-icons/maps-icons/club.svg";
import map_gas from "../../../assets/images/territory-scheme-icons/maps-icons/gas.svg";

import Chip from "../../../assets/images/chip.svg";
import LabelDecor from "../../../assets/images/decor_line.svg";
import GreyWaves from "../../../assets/images/grey-waves.svg";
import IconLabel from "./IconLabel";

const TerritoryScheme = () => {
  const [iconsWidth, setIconsWidth] = useState(41);
  const [hoveredIcon, setHoveredIcon] = useState();

  const mapWidth = useRef();

  const resize = () => {
    if (!mapWidth || !mapWidth.current) return;
    const newIconsWidth = mapWidth.current.clientWidth / 23.91;
    setIconsWidth(newIconsWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    resize();
  }, [mapWidth]);

  const mapIconsHover = (id) => {
    setHoveredIcon(id);
  };

  return (
    <>
      <div className={styles.wrap}>
        <img className={styles.chip} src={Chip} alt="" />
        <div className={styles.legend}>
          <h2>Схема территории</h2>
          <ul>
            <li
              className={hoveredIcon === "kpp" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("kpp")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Kpp} alt="" />
              <span>КПП</span>
            </li>
            <li
              className={hoveredIcon === "visit" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("visit")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Visit} alt="" />
              {/* <Visit /> */}
              <span>Визит–центр</span>
            </li>
            <li
              className={hoveredIcon === "services" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("services")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Services} alt="" />
              <span>
                Ремонт <br /> и сервис
              </span>
            </li>
            <li
              className={hoveredIcon === "garage" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("garage")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Garage} alt="" />
              <span>Теплый ангар</span>
            </li>
            <li
              className={hoveredIcon === "club" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("club")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Club} alt="" />
              <span>
                Клубный <br /> дом
              </span>
            </li>
            <li
              className={hoveredIcon === "seing" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("seing")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Seing} alt="" />
              <span>
                Смотровая <br /> и маяк
              </span>
            </li>
            <li
              className={hoveredIcon === "slip" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("slip")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Slip} alt="" />
              <span>
                Оборудованный <br /> слип
              </span>
            </li>
            <li
              className={hoveredIcon === "anchor" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("anchor")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Anchor} alt="" />
              <span>Причал</span>
            </li>
            <li
              className={hoveredIcon === "gas" ? styles.activeIcon : ""}
              onMouseOver={(e) => mapIconsHover("gas")}
              onMouseOut={() => setHoveredIcon()}
            >
              <img src={Gas} alt="" />
              <span>ПЗС</span>
            </li>
          </ul>
        </div>
        <div className={styles.map}>
          <div>
            <div className={styles.map_container}>
              <img className={styles.mapImg} src={Map} alt="" ref={mapWidth} />

              <div
                className={
                  hoveredIcon === "garage"
                    ? styles.active_map_garage
                    : styles.map_garage
                }
                onMouseOver={(e) => mapIconsHover("garage")}
                onMouseOut={() => setHoveredIcon()}
              >
                <img src={map_garage} style={{ width: iconsWidth }} alt="" />
                <IconLabel text={"Теплый ангар"} flag={hoveredIcon} />
              </div>
              <div
                className={
                  hoveredIcon === "services"
                    ? styles.active_map_services
                    : styles.map_services
                }
                onMouseOver={(e) => mapIconsHover("services")}
                onMouseOut={() => setHoveredIcon()}
              >
                <img src={map_services} style={{ width: iconsWidth }} alt="" />
                <IconLabel text={"Ремонт <br /> и сервис"} flag={hoveredIcon} />
              </div>
              <div
                className={
                  hoveredIcon === "visit"
                    ? styles.active_map_visit
                    : styles.map_visit
                }
                onMouseOver={(e) => mapIconsHover("visit")}
                onMouseOut={() => setHoveredIcon()}
              >
                <img src={map_visit} style={{ width: iconsWidth }} alt="" />
                <IconLabel text={"Визит–центр"} flag={hoveredIcon} />
              </div>
              <div
                className={
                  hoveredIcon === "kpp" ? styles.active_map_kpp : styles.map_kpp
                }
                onMouseOver={(e) => mapIconsHover("kpp")}
                onMouseOut={() => setHoveredIcon()}
              >
                <img src={map_kpp} style={{ width: iconsWidth }} alt="" />
                <IconLabel text={"КПП"} flag={hoveredIcon} />
              </div>
              <div
                className={
                  hoveredIcon === "anchor"
                    ? styles.active_map_anchor
                    : styles.map_anchor
                }
                onMouseOver={(e) => mapIconsHover("anchor")}
                onMouseOut={() => setHoveredIcon()}
              >
                <img src={map_anchor} style={{ width: iconsWidth }} alt="" />
                <IconLabel text={"Причал"} flag={hoveredIcon} />
              </div>
              <div className={
                  hoveredIcon === "slip"
                    ? styles.active_map_slip
                    : styles.map_slip
                }
                onMouseOver={(e) => mapIconsHover("slip")}
                onMouseOut={() => setHoveredIcon()}
                >
              <img
                src={map_slip}
                
                style={{ width: iconsWidth }}
                alt=""
              />
                <IconLabel text={"Оборудованный <br/> слип"} flag={hoveredIcon} />

              </div>
              <div className={
                  hoveredIcon === "seing"
                    ? styles.active_map_seing
                    : styles.map_seing
                }
                onMouseOver={(e) => mapIconsHover("seing")}
                onMouseOut={() => setHoveredIcon()}
                >
              <img
                src={map_seing}
                
                style={{ width: iconsWidth }}
                alt=""
                
              />
                <IconLabel text={"Смотровая <br/> и маяк"} flag={hoveredIcon} />
              
              </div>
              <div className={
                  hoveredIcon === "club"
                    ? styles.active_map_club
                    : styles.map_club
                }
                onMouseOver={(e) => mapIconsHover("club")}
                onMouseOut={() => setHoveredIcon()}
                >
              <img
                src={map_club}
                
                style={{ width: iconsWidth }}
                alt=""
                
              />
                <IconLabel text={"Клубный <br/> дом"} flag={hoveredIcon} />

              </div>
              <div className={
                  hoveredIcon === "gas" ? styles.active_map_gas : styles.map_gas
                }
                onMouseOver={(e) => mapIconsHover("gas")}
                onMouseOut={() => setHoveredIcon()}
                >
              <img
                src={map_gas}
                
                style={{ width: iconsWidth }}
                alt=""
                
              />
                <IconLabel text={"ПЗС"} flag={hoveredIcon} isLeft={true} />

              </div>
            </div>
            <img className={styles.greyWaves} src={GreyWaves} alt="" />
          </div>
        </div>
      </div>
      <img className={styles.labelDecor} src={LabelDecor} alt="" />
    </>
  );
};

export default TerritoryScheme;
