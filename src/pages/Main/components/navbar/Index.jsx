import React, { useContext, useState } from 'react'
import indexStyle from './index.module.css';
import Profile from '../profile/Index';
import Item from '../item/Index';
import ProfilePage from '../../../profile/components/container/Index';
import { navListName } from './navList';
import { useSelector } from 'react-redux';
import { ClickedContext } from '../../../../context/ClickedContext';
import useLogout from '../../hooks/useLogout';

export default function Index() {
  const [itemClicked, setItemClicked] = useState(navListName[0]);
  const userData = useSelector((state) => state.user.value.userData);
  const { setItemClickedM } = useContext(ClickedContext);
  const { logout } = useLogout();

  return (
    <div className={indexStyle['container']}>
        <div className={indexStyle['navbar-header']}>
          <div className={indexStyle['header']}>
              <img src="/assets/brand/logo-black.png" alt="Connectify-logo" />
              <p>Connectify.</p>
          </div>
        </div>
        
        <div 
          className={indexStyle['navbar-profile']}
          onClick={() => {
            setItemClickedM({name: '', icon: '', component: <ProfilePage userData={userData} />});
            setItemClicked({name: '', icon: '', component: null});
          }}
        >
            <Profile />
        </div>

        <div className={indexStyle['navbar-option']}>
          {
            navListName.map(item => {
              return (
                <div 
                  key={item.name} 
                  className={indexStyle['navbar-option-item']}
                  onClick={() => {
                    setItemClicked(item);
                    setItemClickedM(item);
                  }}
                >
                  <Item 
                    imagePath={item.icon} 
                    itemName={item.name}
                    clicked={item.name === itemClicked.name}
                  />
                </div>
              )
            })
          }
        </div>

        <div className={indexStyle['navbar-logout']}>
          <div 
          onClick={() => {
            logout();
          }}
          className={indexStyle['logout']}>
            <img src="\assets\images\logout.png" alt="logout" />
            <p>Logout</p>
          </div>
        </div>
    </div>
  )
}
