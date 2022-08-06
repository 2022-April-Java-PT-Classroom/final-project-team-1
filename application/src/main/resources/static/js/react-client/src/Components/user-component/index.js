import React, {useState} from 'react';

import axios from 'axios';
import style from './style.module.scss';

const Users = ({ users }) => {
    
    const [usersState, setUsersState] = useState(users);

    const [userState, setUserState] = useState({
        userName:"",
        password:""
    });

    const handleUserNameChange = (e) => {
        const value = e.target.value;
        setUserState({
            ...userState,
            [e.target.name]: value
        });
    };
    
    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setUserState({
            ...userState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            userName: userState.userName,
            password: userState.password
        };
        
        axios.post('http://localhost:8080/api/user/add-user', userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUsersState(response.data);
        });
    };

    const handleDelete = (userName) => {
        axios.delete(`http://localhost:8080/api/user/${userName}/delete-user`).then((response) => {
            console.log('Delete Successful');
            console.log('DATA', response.data);
            setUsersState(response.data);
        });
    }

    const handleFindUsersUpdate = (userName) => {
        const userData = {
            userName: userName
        }
        axios.put(`http://localhost:8080/api/user/${userName}`, userData).then((response) => {
            console.log('Update Successful');
            console.log('DATA', response.data);
            setUsersState(response.data);
        });
    }
    
    return (
        <div className={style.userForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    value={userState.userName}
                    onChange={handleUserNameChange}
                    placeholder='Please choose your username'
                />
                <input
                    type="text"
                    name="password"
                    value={userState.password}
                    onChange={handlePasswordChange}
                    placeholder='Please create your password'
                />
                <button type="submit">Create User</button>
            </form>
            <h3>Find A User</h3>
            <div className={style.usersContainer}>
                {usersState.map(user => (
                    <div className={style.userContainer} key={user.userName}>
                        <p className={user.selected ? style.selected : null} onClick={() => handleFindUsersUpdate(user.userName)}>{user.userName}<button onClick={() => handleDelete(user.userName)}>x</button></p>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Users;