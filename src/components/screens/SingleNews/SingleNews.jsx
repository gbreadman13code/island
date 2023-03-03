import React, { useEffect, useState } from "react";
import styles from "./SingleNews.module.scss";
import Container from "../../elements/Container/Container";
import Header from "../../Header/Header";
import Footer from "../../elements/Footer/Footer";

import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getSingleNews from "../../../functions/getSingleNews";

import BackArrow from '../../../assets/images/arrow-back.svg';
import NewsDecor from '../../../assets/images/news-decor.png';

const SingleNews = () => {
  const [singleNews, setSingleNews] = useState();

  const params = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation()

  const singleNewsRedux = useSelector((state) => state.news.single_news);

  useEffect(() => {
    if (!singleNewsRedux) return;
    setSingleNews(singleNewsRedux);
  }, [singleNewsRedux]);

  const goBack = () => {
    navigate("/", {state: {anchor: 'news'}})
  }

  useEffect(() => {
    dispatch(getSingleNews(params.slug));
  }, [dispatch]);

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <div className={styles.wrap}>
      <Container>
        <Header isMainPage={false} />
      </Container>
      {singleNews && (
        <div className={styles.content}>
          <Container>
            <div className={styles.news_header}>
              <p className={styles.title}>{singleNews.title}</p>
              <p className={styles.back_button} onClick={goBack}><img src={BackArrow} alt="" /> <span>Назад</span></p>
            </div>
          </Container>
          <div className={styles.underline}></div>
          <Container>
            <div className={styles.news_content}>
              <div className={styles.news_photo}>
                <img src={singleNews.photo} alt="" />
              </div>
              <div className={styles.news_text} dangerouslySetInnerHTML={createMarkup(singleNews.full_text)}></div>
            </div>
          </Container>
            <div className={styles.decor}>
              <img src={NewsDecor} alt="" />
            </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SingleNews;
