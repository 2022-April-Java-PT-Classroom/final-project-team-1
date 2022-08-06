import React, { useEffect, useState } from "react";

import Axios from 'axios';
import { setUsernameSession } from "../../utils/common";
import style from "./style.module.scss";

//import Girls from "../../Assets/Images/girls-drinks.svg";


const Login = (props) => {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameSession, setUsernameSession] = useState(true);
    const [loadingUsernameSession, setLoadingUsernameSession] = useState(null);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    const handleLogin = () => {

        const userData = {
            userName: userName,
            password: password
        }
        
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`http://localhost:8080/api/user/${userName}`);
            setUsernameSession(result.data.userName);
        }
        if (usernameSession){
            setUsernameSession(false);
        }

        const timer = setTimeout(() => {
            !userName && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
        
    }, [usernameSession]);

    return (
        <div className={style.loginPage}>

        <section className={style.loginTwo}>
        <h2 className={style.loginH2}>Login To Your Account</h2>
            <form className={style.loginForm} onSubmit={handleSubmit}>
                <input className={style.loginText} 
                type="text" placeholder="Username" 
                value={userName} 
                onChange={(event) => setUsername(event.target.value)}>
                </input>
                <input className={style.loginText} 
                type="text" 
                placeholder="Password" value={password} 
                onChange={(event) => setPassword(event.target.value)}>
                </input>
                <button className={style.loginSubmit} type="submit" onClick={handleLogin}>Login With Email</button>
            </form>

            <div className={style.loginLine}>OR</div>
            <button className={style.loginFace} type="submit">Login With Facebook</button>
            <button className={style.loginGoogle} type="submit">Login Up With Google</button>
        </section>

        <section className={style.loginOne}>
            <h1 className={style.loginH1}>Welcome Back. We're Glad You're Here.</h1>
            <img className={style.loginImg} ></img>
        </section>
        </div>
    );
}

export default Login;