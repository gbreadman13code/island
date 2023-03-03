import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

import Burger from '../elements/Burger/Burger';
import UseWindowSize from '../elements/UseWindowSize/UseWindowSize';
import WhiteAnchor from "../../assets/images/white-anchor.svg";
import BlueAnchor from "../../assets/images/blue-anchor.svg";
import LogoColor from "../elements/LogoColor/LogoColor";

// import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as FooterDecor } from '../../assets/images/footer-decor.svg';
import Logo from '../elements/Logo/Logo';

const Header = ({ isMainPage }) => {

  const [width, height] = UseWindowSize();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeBurger, setActiveBurger] = useState(false);

  useEffect(() => {
    if (activeBurger) document.querySelector('body').style.overflowY = 'hidden';
    if (!activeBurger) document.querySelector('body').style.overflowY = '';
  }, [activeBurger])

  const scrollTo = (e, anchor) => {
    e.preventDefault();
    if (isMainPage) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    } else {
      navigate("/", { state: { anchor: anchor } });
    }
  };

  useEffect(() => {
    if (location.state && location.state.anchor) {
      console.log('object')
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.anchor);
        if (location.state.anchor === 'news') {
          if (element) {
            element.scrollIntoView({
              // behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
            location.state = null
          }
        } else {
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
            location.state = null
          }
        }
      }, 10);
      return () => {
        clearTimeout(timer)
      }
    }
  }, [location]);


  return (
    <nav>
    {width > 768 ?
      <ul className={styles.header} id="header">
        <li>
          <a
            href="#"
            onClick={(e) => scrollTo(e, "about")}
            style={
              isMainPage
                ? { color: "rgba(255, 255, 255, 1)" }
                : { color: "rgba(0, 45, 89, 1)" }
            }
          >
            {" "}
            <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> О проекте
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => scrollTo(e, "garage")}
            style={
              isMainPage
                ? { color: "rgba(255, 255, 255, 1)" }
                : { color: "rgba(0, 45, 89, 1)" }
            }
          >
            {" "}
            <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Ангар
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => scrollTo(e, "docScheme")}
            style={
              isMainPage
                ? { color: "rgba(255, 255, 255, 1)" }
                : { color: "rgba(0, 45, 89, 1)" }
            }
          >
            {" "}
            <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Схема причала
          </a>
        </li>
        {isMainPage ? <li><Logo /></li> : <li><LogoColor /></li>}
        <li>
          <a
            href="#"
            onClick={(e) => scrollTo(e, "garage")}
            style={
              isMainPage
                ? { color: "rgba(255, 255, 255, 1)" }
                : { color: "rgba(0, 45, 89, 1)" }
            }
          >
            {" "}
            <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Ремонт и сервис
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => scrollTo(e, "news")}
            style={
              isMainPage
                ? { color: "rgba(255, 255, 255, 1)" }
                : { color: "rgba(0, 45, 89, 1)" }
            }
          >
            {" "}
            <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Новости
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(e) => scrollTo(e, "contacts")}
            style={
              isMainPage
                ? { color: "rgba(255, 255, 255, 1)" }
                : { color: "rgba(0, 45, 89, 1)" }
            }
          >
            {" "}
            <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Контакты
          </a>
        </li>
      </ul>

        :

        <div className={activeBurger ? `${styles.header} ${styles.header__active}` : styles.header} id="header" onClick={(() => {activeBurger ? setActiveBurger(false) : setActiveBurger(true)})}>
          {activeBurger ? <LogoColor /> :  location.pathname.includes('/news') ? <LogoColor /> : <div></div>}

          <Burger
            active={activeBurger}
            setActive={setActiveBurger}
          />

          <ul className={activeBurger ? `${styles.mobile_menu} ${styles.mobile_menu__active}` : styles.mobile_menu}>
            <li>
              <a
                href="#"
                onClick={(e) => scrollTo(e, "about")}
                style={
                  isMainPage
                    ? { color: "rgba(255, 255, 255, 1)" }
                    : { color: "rgba(0, 45, 89, 1)" }
                }
              >
                {" "}
                <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> О проекте
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => scrollTo(e, "garage")}
                style={
                  isMainPage
                    ? { color: "rgba(255, 255, 255, 1)" }
                    : { color: "rgba(0, 45, 89, 1)" }
                }
              >
                {" "}
                <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Ангар
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => scrollTo(e, "docScheme")}
                style={
                  isMainPage
                    ? { color: "rgba(255, 255, 255, 1)" }
                    : { color: "rgba(0, 45, 89, 1)" }
                }
              >
                {" "}
                <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Схема причала
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => scrollTo(e, "garage")}
                style={
                  isMainPage
                    ? { color: "rgba(255, 255, 255, 1)" }
                    : { color: "rgba(0, 45, 89, 1)" }
                }
              >
                {" "}
                <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Ремонт и сервис
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => scrollTo(e, "news")}
                style={
                  isMainPage
                    ? { color: "rgba(255, 255, 255, 1)" }
                    : { color: "rgba(0, 45, 89, 1)" }
                }
              >
                {" "}
                <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Новости
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => scrollTo(e, "contacts")}
                style={
                  isMainPage
                    ? { color: "rgba(255, 255, 255, 1)" }
                    : { color: "rgba(0, 45, 89, 1)" }
                }
              >
                {" "}
                <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Контакты
              </a>
            </li>
            <li><FooterDecor /></li>
          </ul>
        </div>



    }
    </nav>
  );
};

export default Header;
