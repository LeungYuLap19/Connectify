import React from 'react'
import indexStyle from './index.module.css';
import '../../style.css'
import Header from '../BrandHeader/Index';

export default function Index({ setPage }) {
  return (
    <div className='container'>
      <Header />

      <div className={indexStyle['welcome-gif']}>
        <video 
          src="/assets/gif/login-animation.mp4" 
          autoPlay muted loop
        />
      </div>

      <div className={indexStyle['welcome-message']}>
        <h1>Hello!</h1>
        <p>Join hands with Connectify to create lasting connections.</p>
      </div>
      
      <div className={indexStyle['welcome-button']}>
        <button
          className={indexStyle['welcome-button-signup']}
          onClick={() => {
            setPage({
              login: false,
              createAcc: true
            })
          }}
        >Sign Up</button>
        <button
          className={indexStyle['welcome-button-signin']}
          onClick={() => {
            setPage({
              login: true,
              createAcc: false
            })
          }}
        >Sign in</button>
      </div>
    </div>
  )
}
