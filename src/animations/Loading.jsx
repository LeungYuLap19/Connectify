import React from 'react'
import style from './loading.module.css'

export default function Loading() {
  return (
    <div className={style['wrapper']}>
        <div className={style['container']}>
          <div className={style['loader']}></div>
        </div>
    </div>
  )
}
