import React, { useEffect, useState } from 'react'
import indexStyle from './index.module.css';
import Navbar from '../navbar/Index';
import { navListName } from '../navbar/navList';
import { ClickedContext } from './../../../../context/ClickedContext';
import useSocket from '../../hooks/useNotificationSocket';
import useDiscovery from '../../hooks/useDiscovery';
import useWeather from '../../hooks/useWeather';
import useGetFollowingPosts from '../../../auth/hooks/useGetFollowingPosts';
import useGetMessages from '../../../auth/hooks/useGetMessages';
import { useSelector } from 'react-redux';

export default function Index() {
  const [itemClickedM, setItemClickedM] = useState(navListName[0]);
  useSocket();
  const userData = useSelector(state => state.user.value.userData);
  const { getDiscoverUsers, getDiscoveryPosts } = useDiscovery();
  const { getLocWeather } = useWeather();
  const { getPosts } = useGetFollowingPosts();
  const { getMessages } = useGetMessages();

  useEffect(() => {
    getDiscoveryPosts();
    getDiscoverUsers();
    getLocWeather();
    getPosts(userData.id);
    getMessages(userData.id);
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
