import React, { useEffect, useState } from "react";

import styles from "./SliderScreen.module.scss";

import slide1 from "../../../assets/images/Slide1.png";
import Remont from '../../../assets/images/remont.jpg';
import anchor from '../../../assets/images/anchor.svg';
import Container from "../../elements/Container/Container";
import Modal from "../../elements/Modal/Modal";
import ButtonPrice from "../../elements/ButtonPrice/ButtonPrice";

const SliderScreen = () => {
  const slides = [
    { id: 1, title: "Ангар", text: "<p>ТЕПЛЫЙ ОХРАНЯЕМЫЙ АНГАР <br/> ДЛЯ КРУГЛОГОДИЧНОГО <br/> ХРАНЕНИЯ СУДОВ</p>" },
    { id: 2, title: "Ремонт и сервис", text: "<p><span></span>КОРПУСНЫЕ РАБОТЫ</p><p><span></span>РАБОТЫ ПО ЭЛЕКТРООБОРУДОВАНИЮ</p><p><span></span>ОБСЛУЖИВАНИЕ ЛОДОЧНЫХ МОТОРОВ</p><p><span></span>УСТАНОВКА ДОПОЛНИТЕЛЬНОГО ОБОРУДОВАНИЯ</p><p><span></span>ОБСЛУЖИВАНИЕ ТЕХНИКИ ДЛЯ МЕЖСЕЗОННОГО ХРАНЕНИЯ</p>" },
  ];
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const [isShowModal, setShowModal] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 768) {
      if (isShowModal) document.querySelector('body').style.overflowY = 'hidden';
      if (!isShowModal) document.querySelector('body').style.overflowY = '';
    }
    
  }, [isShowModal])

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <div className={styles.wrap} id="garage">
      <div className={styles.navigationWrap}>
        <Container>
          <div className={styles.navigation}>
            {slides.map((item, index) => <p key={index} className={item.id === activeSlide.id ? styles.active : ''} onClick={() => setActiveSlide(item)}>{item.title}</p>)}
          </div>
        </Container>
      </div>
      <div className={styles.contentWrap} style={activeSlide.id === 1 ? {backgroundImage: 'url("' + slide1 + '")'} : {backgroundImage: 'url("' + Remont + '")'}}>
    {isShowModal && <Modal close={() => setShowModal(false)}/>}
            <div className={styles.content}>
                <div className={styles.text} dangerouslySetInnerHTML={createMarkup(activeSlide.text)}></div>
                <div style={{marginRight: 100}}>
                  <ButtonPrice text="узнать цену" openModal={setShowModal} />
                </div>
            </div>
      </div>
    </div>
  );
};

export default SliderScreen;
