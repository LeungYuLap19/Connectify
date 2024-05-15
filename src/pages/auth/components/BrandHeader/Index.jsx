import React from 'react'
import indexStyle from './index.module.css';

export default function Index() {
    return (
        <div className={indexStyle['header']}>
            <img src="/assets/brand/logo-black.png" alt="Connectify-logo" />
            <p>Connectify.</p>
        </div>
    )
}
