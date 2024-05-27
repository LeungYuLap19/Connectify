import React, { useContext } from 'react'
import indexStyle from './index.module.css';
import { ChatroomContext } from '../../../../context/ChatroomContext';
import Search from '../search/Index';
import Items from '../items/Index';

export default function Index() {
  const { state, dispatch } = useContext(ChatroomContext);

  return (
    <div className={indexStyle['container']}>
      <div className={indexStyle['search']}>
        <Search />
      </div>
      <div className={indexStyle['buttons']}>
        <button
          className={state.selectedButton === 'followings' ? indexStyle['selected'] : ''}
          onClick={() => dispatch({ type: 'setSelectedButton', payload: 'followings' })}
        >Followings</button>
        <button
          className={state.selectedButton === 'others' ? indexStyle['selected'] : ''}
          onClick={() => dispatch({ type: 'setSelectedButton', payload: 'others' })}
        >Others</button>
      </div>
      <div className={indexStyle['list']}>
        <Items />
      </div>
    </div>
  )
}