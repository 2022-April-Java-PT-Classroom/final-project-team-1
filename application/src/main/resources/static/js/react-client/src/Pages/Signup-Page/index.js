import React, { useState } from "react";
import Indian from "../../Assets/Images/indian-wedding.svg";
import axios from 'axios';
import { setUsernameSession } from "../../utils/common";
import style from "./style.module.scss";

const Signup = (props) => {

    const handleLogin = () => {

        const userData = {
            username: username,
            password: password
        };

        axios.post('http://localhost:8080/api/user/add-user', userData).then((response) => {
            setUsernameSession(username);
            props.history.push('/Portal');
        });
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <div className={style.signPage}>
        <section className={style.signupOne}>
            <h1 className={style.signupH1}>A Better Relationship Just A Few Clicks Away.</h1>
            <img className={style.signupImg} src={Indian} alt="indian-couple"></img>
        </section>

        <section className={style.signupTwo}>
        <h2 className={style.signupH2}>Sign Up For Rekindle</h2>
            <form className={style.signupForm} onSubmit={handleSubmit}>
                <input className={style.signupText} 
                type="text" placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Username"}>
                </input>
                <input className={style.signupText} 
                type="text" 
                placeholder="Password" value={password} 
                onChange={(event) => setPassword(event.target.value)}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Password"}>
                </input>
                <button className={style.signupSubmit} type="submit" onClick={handleLogin}>Sign Up To Rekindle</button>
            </form>

            <div className={style.signupLine}>OR</div>
            <button className={style.signupFace} type="submit">Sign Up With Facebook</button>
            <button className={style.signupGoogle} type="submit">Sign Up With Google</button>
        </section>
        </div>
    );
}

export default Signup;