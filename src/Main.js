import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import Links from './pages/Links';
import Register from './pages/Register';
import Login from './pages/Login';
import LogUser from './pages/LogUser';
import Logout from './pages/Logout';
import Nopage from './pages/Nopage';

function Main() {
    const [isLogged, setIsLogged] = useState(false);
    if(!isLogged) {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login setIsLogged={setIsLogged}/>} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<Nopage />} />
                    </Routes>
                </BrowserRouter>
            </>
        ) 
    } else {
        return (
                <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Login setIsLogged={setIsLogged}/>} />
                        <Route path='/register' element={<Register />} />
                        <Route path='*' element={<Nopage />} />
                        <Route path='/logged' element={<Links />} >
                            <Route index element={<Home />} />
                            <Route path='/logged/loguser' element={<LogUser />} />
                            <Route path='/logged/logout' element={<Logout setIsLogged={setIsLogged}/>} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                </>
            )
    }
}

export default Main;