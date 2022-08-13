import React, {useState} from "react";
import axios from 'axios';
import style from './style.module.scss';

const UserSubmitted = ({userSubmitted, userName}) => {

    const [userExpState, setUserExpState] = useState({
        dateDate: "",
        dateNotes: "",
        dateIdea: "",
        dateType: "",
        dateLevel: "",
        userName: userName
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setUserExpState({
            ...userExpState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userDateData = {
            dateDate: userExpState.dateDate,
            dateNotes: userExpState.dateNotes,
            dateIdea: userExpState.dateIdea,
            dateType: userExpState.dateType,
            dateLevel: userExpState.dateLevel,
            userName: userExpState.userName
        };

        axios.post('http://localhost:8080/api/${userName}/dateNight/new-dateNight', userDateData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUserExpState(response.data);
        });
        // window.location.reload();
    };

    return (
        <div>
            <h3 className={style.dateTitle}>Tell us your experience on this date</h3>
                <form className={style.dateForm} onSubmit={handleSubmit}>

                    <input className={style.dateInput} type="date" name="dateDate" value={userExpState.dateDate} onChange={handleChange} />
                    <textarea name="dateIdea" value={userExpState.dateIdea} onChange={handleChange} placeholder='Enter date idea you and your partner did'></textarea>
                    <textarea className={style.userExperience} name="dateNotes" value={userExpState.dateNotes} onChange={handleChange} placeholder='Enter your experience'></textarea>
                    <input name="dateType" value={userExpState.dateType} onChange={handleChange} placeholder='Enter Type'></input>
                    <input name="dateLevel" value={userExpState.dateLevel} onChange={handleChange} placeholder='Enter Level'></input>
                    <button className={style.dateBtn}>Submit</button>
                </form>
                <section>
                   {} 
                </section>   
        </div>
    )
}

export default UserSubmitted;