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
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const [itemClickedM, setItemClickedM] = useState(navListName[0]);
  useSocket();
  const userData = useSelector(state => state.user.value.userData);
  const { getDiscoverUsers, getDiscoveryPosts } = useDiscovery();
  const { getLocWeather } = useWeather();
  const { getPosts } = useGetFollowingPosts();
  const { getMessages } = useGetMessages();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      getDiscoveryPosts();
      getDiscoverUsers();
      getLocWeather();
      getPosts(userData.id);
      getMessages(userData.id);
    }
    else {
      navigate('/');
    }
  }, []);

  return (
    <ClickedContext.Provider value={{ itemClickedM, setItemClickedM }}>
      {
        userData && 
        <div className={indexStyle['container']}>
          <div className={indexStyle['main-navbar']}>
              <Navbar setItemClickedM={setItemClickedM} />
          </div>
          <div className={indexStyle['main-page']}>
            { itemClickedM && itemClickedM.component }
          </div>
        </div>
      }
    </ClickedContext.Provider>
  )
}
