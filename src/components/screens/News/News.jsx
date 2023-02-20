import React, { useEffect, useRef, useState } from 'react';

import styles from './News.module.scss';
import { useSelector } from 'react-redux';
import NewsItem from './NewsItem';

import BrandLine from '../../../assets/images/brand-line-news.png';

const News = () => {
  const [news, setNews] = useState()
  const [isHorizontalScroll, setHorizontalScroll] = useState(false);

  const newsRedux = useSelector(state => state.news.news)
  const newsList = useRef()

  const scrollNewsList = (e) => {
    let scrollCount = 0 
    scrollCount = scrollCount + e.deltaY

    if (!newsList || !newsList.current) return
    newsList.current.scrollLeft = newsList.current.scrollLeft + scrollCount;
  }

  useEffect(() => {
    if (isHorizontalScroll) {
      document.querySelector('body').style.overflowY = 'hidden'
      newsList.current.style.overflowX = 'auto' 
    } else {
      document.querySelector('body').style.overflowY = ''
    }

    return () => document.querySelector('body').style.overflowY = ''
  }, [isHorizontalScroll])

  useEffect(() => {
    if (!newsRedux) return;
    setNews(newsRedux)
  }, [newsRedux])

  return (
    <div className={styles.newsWrap} id='news'>
        <div className={styles.header}>
          <h2>НОВОСТИ <br /> КЛУБА</h2>
          <img src={BrandLine} alt="" />
        </div>
        {news && 
          <div className={styles.newsList}
            onMouseEnter={() => setHorizontalScroll(true)}
            onMouseLeave={() => setHorizontalScroll(false)}
            onWheel={(e) => scrollNewsList(e)}
            ref={newsList}
          >
            {news.map((item, index) => <NewsItem key={index} item={item} />)}
          </div>
        }
    </div>
  )
}

export default News
