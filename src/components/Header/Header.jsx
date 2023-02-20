import React, { useEffect } from "react";
import Logo from "../elements/Logo/Logo";

import styles from "./Header.module.scss";

import WhiteAnchor from "../../assets/images/white-anchor.svg";
import BlueAnchor from "../../assets/images/blue-anchor.svg";
import LogoColor from "../elements/LogoColor/LogoColor";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ isMainPage }) => {
  const location = useLocation();

  const navigate = useNavigate();

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
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.anchor);
        if (location.state.anchor === 'news') {
          if (element) {
            element.scrollIntoView({
              // behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
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
      }, 1);
      return () => clearTimeout(timer)
    }
  }, [location]);
  return (
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
          <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Схема
          причала
        </a>
      </li>
      {isMainPage ? <Logo /> : <LogoColor />}
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
          <img src={isMainPage ? WhiteAnchor : BlueAnchor} alt="" /> Ремонт и
          сервис
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
  );
};

export default Header;
