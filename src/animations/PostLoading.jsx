import React from 'react'
import style from './postLoading.module.css';

export default function PostLoading() {
  return (
    <div className={style['container']}>
        <div className={style['animated-background']} />
    </div>
  )
}
