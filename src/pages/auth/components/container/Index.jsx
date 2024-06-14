import React, { useState } from 'react'
import style from './index.module.css';
import Welcome from '../welcome/Index';
import Login from '../login/Index';
import Register from '../register/Index';
import useInit from '../../hooks/useInit';
import Loading from '../../../../animations/Loading';

export default function Index() {
  const [page, setPage] = useState({
    login: false,
    createAcc: false
  });

  const { loading } = useInit();

  return (
    <div className={style['container']}>
      {(!page.login && !page.createAcc) ? (
        <Welcome setPage={setPage} />
      ) : page.login ? (
        <Login setPage={setPage} />
      ) : (
        <Register setPage={setPage} />
      )}
      { loading && <Loading /> }
    </div>
  )
}
