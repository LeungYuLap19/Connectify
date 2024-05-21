import React, { useState } from 'react'
import indexStyle from './index.module.css';
import Navbar from '../navbar/Index';
import { navListName } from '../navbar/navList';
import { ClickedContext } from './../../../../context/ClickedContext';
import useSocket from '../../hooks/useNotificationSocket';

export default function Index() {
  const [itemClickedM, setItemClickedM] = useState(navListName[0]);
  useSocket();

  return (
    <ClickedContext.Provider value={{ itemClickedM, setItemClickedM }}>
      <div className={indexStyle['container']}>
        <div className={indexStyle['main-navbar']}>
            <Navbar setItemClickedM={setItemClickedM} />
        </div>
        <div className={indexStyle['main-page']}>
          { itemClickedM && itemClickedM.component }
        </div>
      </div>
    </ClickedContext.Provider>
  )
}
