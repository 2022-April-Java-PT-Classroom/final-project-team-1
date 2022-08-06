import React, { useState } from "react";
import Girls from "../../Assets/Images/girls-drinks.svg";
import style from "./style.module.scss";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <div className={style.loginPage}>

        <section className={style.loginTwo}>
        <h2 className={style.loginH2}>Login To Your Account</h2>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <input className={style.loginText} 
                type="text" placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)}>
                </input>
                <input className={style.loginText} 
                type="text" 
                placeholder="Password" value={password} 
                onChange={(event) => setPassword(event.target.value)}>
                </input>
                <button className={style.loginSubmit} type="submit">Login With Email</button>
            </form>

            <div className={style.loginLine}>OR</div>
            <button className={style.loginFace} type="submit">Login With Facebook</button>
            <button className={style.loginGoogle} type="submit">Login Up With Google</button>
        </section>

        <section className={style.loginOne}>
            <h1 className={style.loginH1}>Welcome Back. We're Glad You're Here.</h1>
            <img className={style.loginImg} src={Girls} alt="girls-drinks"></img>
        </section>
        </div>
    );
}

export default Login;
