import userSrv from "../services/userSrv";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";


function Login() {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        userSrv.login('userLogin.php', formData)
        .then(response => {
            if(response.data !== false) {
                sessionStorage.setItem("loginId", response.data.user.id);
                sessionStorage.setItem("logName", response.data.user.fname + " " + response.data.user.lname);
                sessionStorage.setItem("email", response.data.user.email);
                const encrypted = CryptoJS.AES.encrypt(response.data.session_id, "rikuhatano");
                sessionStorage.setItem("session_id", encrypted);
                sessionStorage.setItem("non_encripted_session_id", response.data.session_id);
                navigate('/logged');
            } else {
                console.log(response.data);
            }
        })
        .catch(err => {
            console.log(err);
        })

    }
    return (
        <>
            <h1>login</h1>
            <form onSubmit={login}>
                <input name="email" type="email" placeholder="email" defaultValue="test@mail.com"></input>
                <input name="password" type="password" placeholder="password" defaultValue="test"></input>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login;