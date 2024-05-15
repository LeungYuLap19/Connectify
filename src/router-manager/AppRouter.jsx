import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from '../pages/auth/components/container/Index';
import Main from '../pages/Main/components/container/Index';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/connectify/auth' element={<Auth />}></Route>
                <Route path='/connectify/main' element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
