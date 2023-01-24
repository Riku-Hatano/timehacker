import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import userSrv from '../services/userSrv';

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


// echo "session_id: ".$_POST['session_id']." "."name: ".$_SESSION['logName']." logout successfully!";
// 




// session_id	U2FsdGVkX1+2CD9Cn2v6Mz9vC4JsN9hi323bhOX1HbqXpVlD9AlXoITv0pD9laa2YSQu6AQvf1ZWiOkkznoWsQ==	
// logName	lu tian ye	
// email	test@mail.com	
// non_encripted_session_id	fc8d0c79b5e6dfb0b8db67ebd30413a3	
// loginId