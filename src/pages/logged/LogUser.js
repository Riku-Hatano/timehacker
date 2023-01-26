import userSrv from "../../services/userSrv";
import CryptoJS from "crypto-js";
import cryptoJs from "crypto-js";

function LogUser() {
    const fnameStrage = sessionStorage.getItem("logName");
    const formData = new FormData();
    console.log(CryptoJS.AES.decrypt(sessionStorage.getItem('session_id'), "rikuhatano").toString(cryptoJs.enc.Utf8))
    formData.append('logUser', CryptoJS.AES.decrypt(sessionStorage.getItem('session_id'), "rikuhatano").toString(cryptoJs.enc.Utf8))

    userSrv.login('getLogUser.php', formData)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })

    return (
        <>
            <h1>loguser is {fnameStrage} by session strage.</h1>
        </>
    )
}

export default LogUser;