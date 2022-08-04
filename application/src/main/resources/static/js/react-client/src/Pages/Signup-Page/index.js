import React, { useState } from "react";
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
            <h1>This is the signup page</h1>

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
                <button className={style.signupSubmit} type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Signup;