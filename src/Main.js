import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/logged/Home';
import Links from './pages/common/Links';
import Register from './pages/notLogged/Register';
import Login from './pages/notLogged/Login';
import LogUser from './pages/logged/LogUser';
import Logout from './pages/logged/Logout';
import Nopage from './pages/common/Nopage';

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
    //In if condition and isLogged variable, making user jump to legal pages. Technically, isLogged can store if user is logged in as boolean. and depending on the boolean, if condition switch which browserrouter should be shown.
}

export default Main;