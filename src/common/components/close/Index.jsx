import React from 'react'
import indexStyle from './index.module.css'

export default function Index({ close }) {
  return (
    <div className={indexStyle['container']}>
      <div 
        className={indexStyle['bg-close']}
        onClick={() => {
            close(null)
        }}
      />
    </div>
    
  )
}
