import React, {useState} from "react";
import axios from 'axios';
import style from './style.module.scss';

const UserSubmmited = ({userSubmmited}) => {

    const [userExpState, setUserExpState] = useState({
        dateDate: "",
        dateNotes: "",
        dateIdea: "enrfifndjcnr",
        dateType: "Active",
        dateLevel: "hard",
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
            dateLevel: userExpState.dateLevel

        };

        axios.post('http://localhost:8080/dateNight/add-dateNight', userDateData).then((response) => {
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
                    <textarea className={style.userExperience} name="dateNotes" value={userExpState.dateNotes} onChange={handleChange} placeholder='Enter your experience'></textarea>
                    <button className={style.dateBtn}>Submit</button>
                </form>
        </div>
    )
}

export default UserSubmmited;