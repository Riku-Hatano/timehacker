import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Links from './pages/Links';
import Register from './pages/Register';
import Login from './pages/Login';
import LogUser from './pages/LogUser';
import Logout from './pages/Logout';

function Main() {
    const [logUser, setLogUser] = useState("");
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logged' element={<Links />} >
                        <Route index element={<Home />} />
                        <Route path='/logged/loguser' element={<LogUser />} />
                        <Route path='/logged/logout' element={<Logout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        
        </>
    )

}

export default Main;