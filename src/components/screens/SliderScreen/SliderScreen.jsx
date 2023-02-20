import React, { useState } from "react";

import styles from "./SliderScreen.module.scss";

import slide1 from "../../../assets/images/Slide1.png";
import anchor from '../../../assets/images/anchor.svg';
import Container from "../../elements/Container/Container";
import Modal from "../../elements/Modal/Modal";
import ButtonPrice from "../../elements/ButtonPrice/ButtonPrice";

const SliderScreen = () => {
  const slides = [
    { id: 1, title: "Ангар", text: "<p>ТЕПЛЫЙ ОХРАНЯЕМЫЙ АНГАР <br/> ДЛЯ КРУГЛОГОДИЧНОГО <br/> ХРАНЕНИЯ СУДОВ</p>" },
    { id: 2, title: "Ремонт и сервис", text: "<p>КОРПУСНЫЕ РАБОТЫ <br/> РАБОТЫ ПО ЭЛЕКТРООБОРУДОВАНИЮ <br/> ОБСЛУЖИВАНИЕ ЛОДОЧНЫХ МОТОРОВ <br/> УСТАНОВКА ДОПОЛНИТЕЛЬНОГО ОБОРУДОВАНИЯ <br/> ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ ТЕХНИКИ ДЛЯ МЕЖСЕЗОННОГО ХРАНЕНИЯ</p>" },
  ];
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const [isShowModal, setShowModal] = useState(false)

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
      <div className={styles.contentWrap} style={{backgroundImage: 'url("' + slide1 + '")'}}>
    {isShowModal && <Modal close={() => setShowModal(false)}/>}
            <div className={styles.content}>
                <div dangerouslySetInnerHTML={createMarkup(activeSlide.text)}></div>
                <div style={{marginRight: 100}}>
                  <ButtonPrice text="узнать цену" openModal={setShowModal} />
                </div>
            </div>
      </div>
    </div>
  );
};

export default SliderScreen;
