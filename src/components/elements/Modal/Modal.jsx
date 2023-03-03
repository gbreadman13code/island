import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";

// import EmptyCheckbox from "../../../assets/images/emptyCheckbox.svg";
// import ActiveCheckbox from "../../../assets/images/activeCheckbox.svg";
import { sendform } from "../../../functions/sendform";

import EmptyCheckbox from '../../../assets/images/emptyCheckbox.svg';
import ActiveCheckbox from '../../../assets/images/activeCheckbox.svg';
import MobileEmptyCheckbox from '../../../assets/images/MobileEmptyCheckBox.svg';
import MobileActiveCheckbox from '../../../assets/images/MobileActiveCheckbox.svg';

const Modal = ({ close, withBG }) => {
  const [name, setName] = useState();
  const [model, setModel] = useState();
  const [length, setLength] = useState();
  const [phone, setPhone] = useState();
  const [garage, setGarage] = useState(false);
  const [doc, setDoc] = useState(false);
  const [success, setSuccess] = useState(false);

  const send = () => {
    const data = {
      fio: name,
      boat_model: model,
      boat_length: length,
      phone: phone,
      is_hangar: garage,
      is_dock: doc,
    };
    sendform(data, setSuccess);
  };

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => {
        close()
        setSuccess(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [success])

  return (
    <div
      className={styles.modalWrap}
      style={withBG ? { backgroundColor: "rgba(255, 255, 255, 0.55)" } : {}}
    >
      <div className={styles.modal}>
        {success ? (
          <p className={styles.success}>
            Ваша заявка успешно отправлена. Окно закроется автоматически через 3
            секунды...
          </p>
        ) : (
          <>
            <div className={styles.inputBox}>
              <label htmlFor="name">Имя Фамилия</label>
              <input
                placeholder="Петров Иван"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name=""
                id="name"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="model">Модель лодки</label>
              <input
                placeholder="Fjord 53 XL"
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                name=""
                id="model"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="length">Длина лодки</label>
              <input
                placeholder="14.50 м"
                type="text"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                name=""
                id="length"
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="phone">Номер телефона</label>
              <input
                placeholder="+7 (123) 456-78-90"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name=""
                id="phone"
              />
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name=""
                id="garage"
                onChange={() => setGarage(!garage)}
              />
              <img
                src={window.innerWidth > 1000 ? (garage ? ActiveCheckbox : EmptyCheckbox) : (garage ? MobileActiveCheckbox : MobileEmptyCheckbox)}
                alt=""
                onClick={() => setGarage(!garage)}
              />
              <label onClick={() => setGarage(!garage)}>Аренда места в ангаре</label>
            </div>
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                name=""
                id="doc"
                onChange={() => setDoc(!doc)}
              />
              <img
                src={window.innerWidth > 1000 ? doc ? ActiveCheckbox : EmptyCheckbox : doc ? MobileActiveCheckbox : MobileEmptyCheckbox}
                alt=""
                onClick={() => setDoc(!doc)}
              />
              <label onClick={() => setDoc(!doc)}>Аренда места причала</label>
            </div>
          </>
        )}
        <div className={styles.buttonGroup}>
          {success ? <span></span> : (
            <button className={styles.formButton} onClick={send}>
                Отправить
            </button>
          )}
          <button className={styles.formButton} style={success ? {backgroundColor: '#FFF'} : {}} onClick={close}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
