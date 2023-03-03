import React, { useEffect, useState } from "react";

// import LoaderScreen from "../../../assets/images/loader-screen.png";
// import LoaderScreenMobile from "../../../assets/images/loader-screen-mobile.png";

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
import LoaderScreen from '../LoaderScreen/LoaderScreen';
import LoaderScreenMobile from '../LoaderScreen/LoaderScreenMobile';

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
    if (isShowLoader) document.querySelector('body').style.overflowY = 'hidden';
    if (!isShowLoader) document.querySelector('body').style.overflowY = '';
  }, [isShowLoader])

  useEffect(() => {
    let timer = setTimeout(() => setShowLoader(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="App">
        {isShowLoader && (window.innerWidth > 768 ? <LoaderScreen /> : <LoaderScreenMobile /> )}
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
