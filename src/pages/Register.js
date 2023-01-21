import userSrv from "../services/userSrv";

function Register() {
    const register = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        userSrv.register('userRegister.php', formData)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <form onSubmit={register}>
                <input name="fname" type="fname" placeholder="fname" defaultValue="lu" required></input>
                <input name="lname" type="lname" placeholder="lname" defaultValue="tian ye" required></input>
                <input name="email" type="email" placeholder="email" defaultValue="test@mail.com" required></input>
                <input name="password" type="password" placeholder="password" defaultValue="test" required></input>
                <button type="submit">register</button>
            </form>
        </>
    )
}

export default Register;