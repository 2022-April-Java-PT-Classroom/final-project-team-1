import React, {useState} from "react";
import axios from 'axios';
import style from './style.module.scss';
const UserSubmitted = ({userSubmitted, userName, setUserExp}) => {
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
                    <input className={style.dateInput} type="date" name="dateDate" value={userExpState.dateDate} onChange={handleChange} />
                    <input name="dateIdea" value={userExpState.dateIdea} onChange={handleChange} placeholder='Enter date idea you and your partner did'></input>
                    <textarea className={style.userExperience} name="dateNotes" value={userExpState.dateNotes} onChange={handleChange} placeholder='Enter your experience'></textarea>
                    <button className={style.dateBtn}>Submit</button>
                </form>
                <section>
                   {userSubmitted && userSubmitted.map(dateNight => (
                    <div key={dateNight.dateNightId}>
                        <p>{dateNight.dateDate}</p>
                        <p>{dateNight.dateIdea}</p>
                        <p>{dateNight.dateNotes}</p>
                    </div>
                   ))}
                </section>
        </div>
    )
}
export default UserSubmitted;