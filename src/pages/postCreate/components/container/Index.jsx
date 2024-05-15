import React from 'react'
import indexStyle from './index.module.css'
import Upload from '../Upload/Index';

export default function Index() {
  return (
    <div className={indexStyle['container']}>
      <h1>Create Post</h1>

      <div className={indexStyle['create-window']}>
        <div className={indexStyle['create-window-upload']}>
          <Upload />
        </div>
        <div className={indexStyle['create-window-input']}>

        </div> 
      </div>
    </div>
  )
}
