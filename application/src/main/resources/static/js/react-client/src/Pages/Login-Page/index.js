import React, { useState } from "react";

import Users from "../../Components/user-component";
import axios from 'axios';
import style from "./style.module.scss";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(username, password);

        const userData = {
            userName: useState.userName,
            password: useState.password
        };
        
        axios.post('http://localhost:8080/api/user/add-user', userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUsername(response.data);
            setPassword(response.data);
        });
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
