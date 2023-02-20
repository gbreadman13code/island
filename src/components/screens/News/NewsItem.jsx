import React from "react";

import styles from "./News.module.scss";

import { useNavigate, Link } from 'react-router-dom';

const NewsItem = ({ item }) => {
  const navigate = useNavigate();

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <Link className={styles.newsItem} to={'news/' + item.slug}>
      <img src={item.photo} alt="" />
      <p>{item.title}</p>
      <div
        dangerouslySetInnerHTML={createMarkup(item.short_text)}
        className={styles.description}
      ></div>
      <span className={styles.show_more}>ПОДРОБНЕЕ</span>
    </Link>
  );
};

export default NewsItem;
