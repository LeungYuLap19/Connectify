import React from 'react'
import style from './done.module.css';

export default function Done() {
  return (
    <div className={style['wrapper']}> 
        <div className={style['container']}>
            <svg className={style['checkmark']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> 
                <circle className={style['checkmark__circle']} cx="26" cy="26" r="25" fill="none"/> 
                <path className={style['checkmark__check']} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
        </div>
    </div>
  )
}
