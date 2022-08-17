import React, {useState} from "react";

import axios from 'axios';
import style from './style.module.scss';

const UserSubmitted = ({ userName, randomDateNight}) => {
    const [userExpState, setUserExpState] = useState({
        dateDate: "",
        dateNotes: "",
        dateIdea: randomDateNight && randomDateNight.dateIdea,
        dateType: randomDateNight && randomDateNight.dateType,
        dateLevel: randomDateNight && randomDateNight.dateLevel,
        userName: userName
    });
    const [userExp, setUserExp] = useState([])
    
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
        axios.post(`http://localhost:8080/${userName}/dateNight/new-dateNight`, userDateData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setUserExp(response.data);
        });
    };
    return (
        <div>
            <h3 className={style.dateTitle}>Tell us your experience on this date</h3>
                <form className={style.dateForm} onSubmit={handleSubmit}>
                    {/* sets the calendar date by the user */}
                    <input className={style.dateInput} type="date" name="dateDate" value={userExpState.dateDate} onChange={handleChange} />
                    {/* intakes idea data from populator, randomized from the display page  */}
                    <input className={style.dateIdea} type="text" name="dateIdea" value={randomDateNight.dateIdea} onChange={handleChange}></input>
                    {/* intakes type data from populator, same as above */}
                    <input className={style.dateType} type="text" name="dateType" value={randomDateNight.dateType} onChange={handleChange}></input>
                    {/* intakes date level from populator, same as above */}
                    <input className={style.dateLevel} type="text" name="dateLevel" value={randomDateNight.dateLevel} onChange={handleChange}></input>
                    {/* sets the user submission notes about the date from inside this component */}
                    <textarea className={style.userExperience} name="dateNotes" value={userExpState.dateNotes} onChange={handleChange} placeholder='Enter your experience'></textarea>
                    <button className={style.dateBtn}>Submit</button>
                </form>
                <section>
                   {userExp && userExp.map(userExp => (
                    <div key={userExp.dateNightId}>
                        <p>{userExp.dateDate}</p>
                        <p>{userExp.dateIdea}</p>
                        <p>{userExp.dateType}</p>
                        <p>{userExp.dateLevel}</p>
                        <p>{userExp.dateNotes}</p>
                    </div>
                   ))}
                </section>
        </div>
    )
}
export default UserSubmitted;