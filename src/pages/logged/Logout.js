import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import userSrv from '../../services/userSrv';

function Logout() {
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('session_id', sessionStorage.getItem('non_encripted_session_id'));
    formData.append('logName', sessionStorage.getItem('logName'));
    userSrv.login('userLogout.php', formData)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })

    sessionStorage.removeItem('session_id');
    sessionStorage.removeItem('logName');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('non_encripted_session_id');
    sessionStorage.removeItem('loginId');
    useEffect(() => {
        navigate('/');
    }, []);
}

export default Logout;