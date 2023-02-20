import React, { useEffect, useRef, useState } from "react";
import styles from './TerritoryScheme.module.scss';

const IconLabel = ({ text, flag, isLeft }) => {
  const [textHeight, setTextHeight] = useState(1);
  const [textWidth, setTextWidth] = useState(1);

  const textParams = useRef();
 
  const getParams = () => {
    if (!textParams || !textParams.current) return;
    setTextWidth(textParams.current.clientWidth);
    setTextHeight(textParams.current.clientHeight);
  }

  useEffect(() => {
    if (!flag) return
    getParams()
  }, [flag])

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <div className={styles.note}>
      <div className={styles.dot}></div>
      <div className={styles.lineDegrees}></div>
      <div className={styles.horizontalLine} style={isLeft ? {width: textWidth, left: -(textWidth + 11)} : {width: textWidth, right: -(textWidth + 11.5)}}>
        <div className={styles.text} ref={textParams} style={{top: -textHeight - 10}} dangerouslySetInnerHTML={createMarkup(text)}></div>
      </div>
    </div>
  );
};

export default IconLabel;
