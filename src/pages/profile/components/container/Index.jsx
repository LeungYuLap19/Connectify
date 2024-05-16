import React from 'react'
import indexStyle from './index.module.css';
import Info from '../info/Index'
import Posts from '../posts/Index'

export default function Index() {
  return (
    <div className={indexStyle['container']}>
      <div className={indexStyle['background']}>

      </div>

      <div className={indexStyle['profile']}>
        <div className={indexStyle['profile-info']}>
          <Info />
        </div>
        
        <div className={indexStyle['profile-posts']}>
          <Posts />
        </div>
      </div>
    </div>
  )
}
