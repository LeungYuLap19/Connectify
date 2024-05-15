import React from 'react';
import indexStyle from './index.module.css';

export default function Index({ imagePath, itemName, clicked }) {
  const itemClassName = clicked ? indexStyle['clicked'] : '';

  return (
    <div className={`${indexStyle['container']} ${itemClassName}`}>
      <img src={imagePath} alt="navbar-item" />
      <p>{itemName}</p>
    </div>
  );
}