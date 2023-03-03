import React, { useEffect, useState } from "react";

import styles from "./News.module.scss";

import { useNavigate, Link } from "react-router-dom";

const NewsItem = ({ item }) => {
  const [isMobile, setMobile] = useState(false);
  const navigate = useNavigate();

  const resize = () => {
    if (window.innerWidth > 768) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const createMarkup = (text) => {
    return { __html: text };
  };

  return !isMobile ? (
    <Link className={styles.newsItem} to={"news/" + item.slug}>
      <img src={item.photo} alt="" />
      <p>{item.title}</p>
      <div
        dangerouslySetInnerHTML={createMarkup(item.short_text)}
        className={styles.description}
      ></div>
      <span className={styles.show_more}>ПОДРОБНЕЕ</span>
    </Link>
  ) : (
    <Link className={styles.newsItemMobile} to={"news/" + item.slug}>
      <img src={item.photo} alt="" />
      <div className={styles.text}>
        <p>{item.title}</p>
        <div
          dangerouslySetInnerHTML={createMarkup(item.short_text)}
          className={styles.description}
        ></div>
        <span className={styles.show_more}>ПОДРОБНЕЕ</span>
      </div>
    </Link>
  );
};

export default NewsItem;
