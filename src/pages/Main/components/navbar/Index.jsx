import React, { useContext, useState } from 'react'
import indexStyle from './index.module.css';
import Header from '../../../auth/components/BrandHeader/Index'
import Profile from '../profile/Index';
import Item from '../item/Index';
import ProfilePage from '../../../profile/components/container/Index';
import { navListName } from './navList';
import { useSelector } from 'react-redux';
import { ClickedContext } from '../../../../context/ClickedContext';

export default function Index() {
  const [itemClicked, setItemClicked] = useState(navListName[0]);
  const userData = useSelector((state) => state.user.value.userData);
  const { setItemClickedM } = useContext(ClickedContext);

  return (
    <div className={indexStyle['container']}>
        <div className={indexStyle['navbar-header']}>
            <Header />
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
    </div>
  )
}
