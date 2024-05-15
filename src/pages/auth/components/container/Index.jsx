import React, { useState } from 'react'
import style from './index.module.css';
import Welcome from '../welcome/Index';
import Login from '../login/Index';
import Register from '../register/Index';

export default function Index() {
  const [page, setPage] = useState({
    login: false,
    createAcc: false
  });

  return (
    <div className={style['container']}>
      {(!page.login && !page.createAcc) ? (
        <Welcome setPage={setPage} />
      ) : page.login ? (
        <Login setPage={setPage} />
      ) : (
        <Register setPage={setPage} />
      )}
    </div>
  )
}
