import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import Navbar from '../navbar/Index';
import { navListName } from '../navbar/navList';
import { ClickedContext } from './../../../../context/ClickedContext';
import useSocket from '../../hooks/useNotificationSocket';
import useDiscovery from '../../hooks/useDiscovery';
import useWeather from '../../hooks/useWeather';

export default function Index() {
  const [itemClickedM, setItemClickedM] = useState(navListName[0]);
  useSocket();
  const { getDiscoverUsers, getDiscoveryPosts } = useDiscovery();
  const { getLocWeather } = useWeather();

  useEffect(() => {
    getDiscoveryPosts();
    getDiscoverUsers();
    getLocWeather();
  }, []);

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
