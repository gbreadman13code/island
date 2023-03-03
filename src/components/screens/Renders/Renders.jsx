import React, { useEffect, useRef, useState } from "react";

import styles from "./Renders.module.scss";

import Protoka from "../../../assets/images/renders/Protoka.jpg";
import Verh from "../../../assets/images/renders/TerritoriaVerh.jpg";
import Angar from "../../../assets/images/renders/Angar.jpg";
import Remont from "../../../assets/images/renders/Remont.jpg";
import Mayak from "../../../assets/images/renders/Mayak.jpg";
import Akvatoria from "../../../assets/images/renders/Akvatoria.jpg";
import Stela from "../../../assets/images/renders/Stela.jpg";
import Club from "../../../assets/images/renders/Club.jpg";
import Otdyh1 from "../../../assets/images/renders/Otdyh1.jpg";
import Otdyh2 from "../../../assets/images/renders/Otdyh2.jpg";
import Vhod from "../../../assets/images/renders/vhod.jpg";

import sups from "../../../assets/images/sup.svg";
import blueWaves from "../../../assets/images/blue-waves.svg";

import UseWindowSize from '../../elements/UseWindowSize/UseWindowSize';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stylesSlider from './RenderSlider.scss';

const Renders = () => {
  const [imgWidth, setImgWidth] = useState(900);
  const [mainSlide, setMainSlide] = useState();
  const [miniSlide, setMiniSlide] = useState();
  // console.log(miniSlide)
  const [isFullImgLoaded, setFullImgLoaded] = useState(false);
  const fullImgSize = useRef();
  const [width, height] = UseWindowSize();

  const renders = [
    { id: 1, title: "Абаканская протока. Причал", url: Protoka },
    { id: 2, title: "Территория сверху", url: Verh },
    { id: 3, title: "Теплый ангар для круглогодичного хранения", url: Angar },
    { id: 4, title: "Визит-центр", url: Remont },
    { id: 5, title: "Въезд на территорию", url: Vhod },
    { id: 6, title: "Смотровая площадка и маяк", url: Mayak },
    { id: 7, title: "Акватория Абаканской протоки. Маяк", url: Akvatoria },
    { id: 8, title: "Приветственная Стела", url: Stela },
    { id: 9, title: "Клубный дом", url: Club },
    { id: 10, title: "Зона отдыха", url: Otdyh1 },
    { id: 11, title: "Зона отдыха", url: Otdyh2 },
  ];

  let settings = {
    fade: false,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    swipeToSlide: true,
    mobileFirst: true,
  };

  useEffect(() => {
    if (!renders || renders.length === 0) return;
    setMainSlide(renders[0]);
    setMiniSlide(renders[1]);
  }, []);

  const nextSlide = () => {
    setFullImgLoaded(true);
    const timer = setTimeout(() => {
      setMainSlide(miniSlide);
      const currentMiniSlide = renders.findIndex(
        (item) => item.id === miniSlide.id
      );
      if (!renders[currentMiniSlide + 1]) {
        setMiniSlide(renders[0]);
        return;
      }
      setMiniSlide(renders[currentMiniSlide + 1]);
    }, 300);

    return () => clearTimeout(timer);
  };

  const resize = () => {
    if (!fullImgSize || !fullImgSize.current) return;
    setImgWidth(fullImgSize.current.clientWidth);
  };

  useEffect(() => {
    resize();
  }, [fullImgSize]);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
    {width > 768 ?



      <div className={styles.wrap}>
        {mainSlide && (
          <div className={styles.fullImg}>
            <div>
              <img
                src={mainSlide.url}
                alt=""
                ref={fullImgSize}
                onLoad={() => setFullImgLoaded(false)}
                style={isFullImgLoaded ? { opacity: 0 } : { opacity: 1 }}
              />
              <img
                className={styles.waves_decor}
                src={blueWaves}
                alt=""
                style={{ width: imgWidth / 2.3, right: -(imgWidth / 2.3 / 2) }}
              />
            </div>
            <p>{isFullImgLoaded ? "Загрузка фото..." : mainSlide.title}</p>
          </div>
        )}
        {miniSlide && (
        <div className={styles.smallImg}>

          <div onClick={nextSlide}>
          <div className={styles.blurBlock}><span>Следующее фото</span></div>
            <img
              src={miniSlide.url}
              alt=""
              onLoad={() => setFullImgLoaded(false)}
            />

          </div>
          <p>{miniSlide.title}</p>
        </div>
        )}
        <img className={styles.sup_decor} src={sups} alt="" />
      </div>

    : <div id='renderSlider'>
        <Slider {...settings}>
          {renders.map((item) => (
            <div className={styles.slider} key={item.id}>
              <div>
              <h3 className={styles.title}>{item.title}</h3>
              <img className={styles.image} src={item.url} alt={item.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>}

    </>
  );
};

export default Renders;
