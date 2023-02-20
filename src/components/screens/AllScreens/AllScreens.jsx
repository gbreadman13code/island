import React, { useEffect, useState } from "react";

import LoaderScreen from "../../../assets/images/loader-screen.jpeg";

import MainScreen from "../MainScreen/MainScreen";
import Services from "../Services/Services";
import TerritoryScheme from "../TerritoryScheme/TerritoryScheme";
import Renders from "../Renders/Renders";
import DocScheme from "../DocScheme/DocScheme";
import SliderScreen from "../SliderScreen/SliderScreen";
import News from "../News/News";
import Footer from "../../elements/Footer/Footer";
import { useLocation } from 'react-router-dom';

import ScrollTop from '../../../assets/images/scroll-top.svg';

const AllScreens = () => {
  const location = useLocation()

  const [isShowLoader, setShowLoader] = useState(location.state === null ? true : false);
  const [isShowScrollTopButton, setShowScrollTopButton] = useState(false)

  const scrollToTop = () => {
    if (window.scrollY > 500) {
      setShowScrollTopButton(true)
    } else {
      setShowScrollTopButton(false)
    }
  }

  const scrollTopClickHandler = () => {
    const element = document.getElementById('header');
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop)

    // return () => window.removeEventListener('scroll', scrollToTop)
  }, [])

  useEffect(() => {
    let timer = setTimeout(() => setShowLoader(false), 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="App">
        {isShowLoader && <img src={LoaderScreen} className="loader" />}
        <MainScreen />
        <Services />
        <TerritoryScheme />
        <Renders />
        <DocScheme />
        <SliderScreen />
        <News />
        <Footer />
        <img src={ScrollTop} style={isShowScrollTopButton ? {transform: 'scale(1)'} : {transform: 'scale(0)'}} alt="" className="scrollTop" onClick={scrollTopClickHandler} />
      </div>
    </div>
  );
};

export default AllScreens;
