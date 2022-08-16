import { React, useState } from "react";
import axios from 'axios';
import style from './style.module.scss';
import { getUsername } from "../../utils/common";

const username = getUsername();

const DiscussForm = ({ quest }) => {

    const [discussFormEntry, setdiscussFormEntry] = useState({
        discussDate: "",
        discussQuestion: "",
        discussAnswerOne: "",
        discussAnswerTwo: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setdiscussFormEntry({
            ...discussFormEntry,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userDiscussData = {
            discussDate: discussFormEntry.discussDate,
            discussQuestion: quest,
            discussAnswerOne: discussFormEntry.discussAnswerOne,
            discussAnswerTwo: discussFormEntry.discussAnswerTwo,
        };

        axios.post(`http://localhost:8080/api/${username}/add-discuss`, userDiscussData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setdiscussFormEntry(response.data);
        });
    };

    return (
        <div>
            <form className={style.discussForm} onSubmit={handleSubmit}>
                <input className={style.discussDate} type="date"
                name="discussDate"
                value={discussFormEntry.discussDate}
                onChange={handleChange}></input>

                <input className={style.discussQuest} type="text"
                name="discussQuestion"
                value={quest}
                onChange={handleChange}></input>

                <textarea className={style.discussEntry} type="text" placeholder="Your Answer" 
                name="discussAnswerOne"
                value={discussFormEntry.discussAnswerOne}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Your Answer"}
                onChange={handleChange}></textarea>

                <textarea className={style.discussEntry} type="text" placeholder="Your Partner's Answer"
                name="discussAnswerTwo"
                value={discussFormEntry.discussAnswerTwo}
                onFocus={(e) => e.target.placeholder = ""} 
                onBlur={(e) => e.target.placeholder = "Your Partner's Answer"}
                onChange={handleChange}></textarea>
                <button className={style.discussSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default DiscussForm;