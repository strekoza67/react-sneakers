import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onClickFavourite, onPlus }) {

  const [isChecked, setChecked] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setChecked(!isChecked);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}
        onClick={onClickFavourite} >
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plus}
          onClick={onClickPlus}
          src={isChecked ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus" />
      </div>
    </div>
  );
}

export default Card;
