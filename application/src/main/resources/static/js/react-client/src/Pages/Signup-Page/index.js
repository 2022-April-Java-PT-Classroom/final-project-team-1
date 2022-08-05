import React, { useState } from "react";
import Indian from "../../Assets/Images/indian-wedding.svg";
import style from "./style.module.scss";

const Signup = () => {
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
            <img className={style.signupImg} src={Indian}></img>
        </section>

        <section className={style.signupTwo}>
        <h2 className={style.signupH2}>Sign Up For Rekindle</h2>
            <form className={style.signupForm} onSubmit={handleSubmit}>
                <input className={style.signupText} 
                type="text" placeholder="Username" 
                value={username} 
                onChange={(event) => setUsername(event.target.value)}>
                </input>
                <input className={style.signupText} 
                type="text" 
                placeholder="Password" value={password} 
                onChange={(event) => setPassword(event.target.value)}>
                </input>
                <button className={style.signupSubmit} type="submit">Sign Up With Email</button>
            </form>

            <div className={style.signupLine}>OR</div>
            <button className={style.signupFace} type="submit">Sign Up With Facebook</button>
            <button className={style.signupGoogle} type="submit">Sign Up With Google</button>
        </section>
        </div>
    );
}

export default Signup;