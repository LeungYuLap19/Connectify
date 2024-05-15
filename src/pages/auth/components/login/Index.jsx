import React, { useEffect, useRef } from 'react'
import indexStyle from './index.module.css';
import Header from '../BrandHeader/Index'
import useSignin from '../../hooks/useSignin';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom';

export default function Index({ setPage }) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value.userData)

  const identifierRef = useRef(null);
  const passwordRef = useRef(null);

  const { signin } = useSignin();
  const handleSignin = async (e) => {
    e.preventDefault();
    const indentifier = identifierRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    const data = await signin(indentifier, password);
    if(data) {
      const userData = data.data;
      console.log(userData);
      dispatch(login(userData));
      navigate('/connectify/main');
    }
    else {
      identifierRef.current.value = '';
      passwordRef.current.value = '';
    }
  }

  return (
    <div className='container'>
      <Header />

      <div className={indexStyle['login-message']}>
        <h1>Welcome Back!</h1>
        <p>Sign in to Continue.</p>
      </div>

      <div className={indexStyle['login-form']}>
        <form onSubmit={handleSignin}>
          <div className={indexStyle['login-form-email']}>
            <label>Email or Username</label><br/>
            <input type="text" name="identifier" ref={identifierRef} required/>
          </div>
          <div className={indexStyle['login-form-password']}>
            <label>Password</label><br/>
            <input type="password" name="password" ref={passwordRef} required/>
          </div>
          <button className={indexStyle['login-button']} type="submit">Login</button>
        </form>
      </div>

      <div className={indexStyle['login-signup']}>
        <p>Don't have an account?</p>
        <span
          onClick={() => {
            setPage({
              login: false,
              createAcc: true
            })
          }}
        >Sign up</span>
      </div>
    </div>
  )
}
