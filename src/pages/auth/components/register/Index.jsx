import React, { useEffect, useRef, useState } from 'react'
import indexStyle from './index.module.css';
import Header from '../BrandHeader/Index'
import useSignup from '../../hooks/useSignup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../../store/slices/userSlice'
import Done from '../../../../animations/Done';
import Loading from '../../../../animations/Loading';

export default function Index({ setPage }) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const { signup } = useSignup();
  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    const username = usernameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    const data = await signup(username, email, password);
    if (data) {
      setLoading(false);
      const userData = data.data;
      dispatch(login(userData));
      setIsDone(true);
      setTimeout(() => {
        navigate('/connectify/main');
      }, 2500)
    }
    else {
      setLoading(false);
      usernameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      usernameRef.current.focus();
    }
  }

  return (
    <>
      <div className='container'>
        <Header />

        <div className={indexStyle['register-message']}>
          <h1>Create Your Account</h1>
          <p>Join us and share your moments with friends.</p>
        </div>

        <div className={indexStyle['register-form']}>
          <form onSubmit={handleSignup}>
            <div>
              <label>Username</label><br />
              <input type="text" name="username" ref={usernameRef} required/>
            </div>
            <div>
              <label>Email</label><br />
              <input type="email" name="email" ref={emailRef} required/>
            </div>
            <div>
              <label>Password</label><br />
              <input type="password" name="password" ref={passwordRef} required/>
            </div>
            <button className={indexStyle['register-button']} type="submit">Sign up</button>
          </form>
        </div>

        <div className={indexStyle['register-signin']}>
          <p>Already have an account?</p>
          <span
            onClick={() => {
              setPage({
                login: true,
                createAcc: false
              })
            }}
          >Sign in</span>
        </div>
      </div>

      {loading && <Loading />}
      {isDone && <Done />}
    </>
  )
}
