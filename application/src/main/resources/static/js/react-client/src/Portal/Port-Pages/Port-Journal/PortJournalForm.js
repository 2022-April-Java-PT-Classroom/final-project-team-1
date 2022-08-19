import { React, useState } from 'react';
import axios from 'axios';
import style from './style.module.scss';

const PortalJournalForm = ({ userName, journals, setJournals }) => {


    const [journalState, setJournalState] = useState({
        journalDate: "",
        journalEntry: "",
        userName: userName
    });

    const handleJournalDateChange = (e) => {
        const value = e.target.value;
        setJournalState({
            ...journalState,
            [e.target.name]: value
        });
    };

    const handleJournalEntryChange = (e) => {
        const value = e.target.value;
        setJournalState({
            ...journalState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            journalDate: journalState.journalDate,
            journalEntry: journalState.journalEntry,
            userName: journalState.userName
        };

        axios.post(`http://localhost:8080/api/${userName}/journals/add-journal-entry`, userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setJournals(response.data);
        });
    };

    const handleDelete = (userName, journalId) => {
        axios.delete(`http://localhost:8080/api/${userName}/journals/${journalId}/delete-journal-entry`).then((response) => {
            console.log('Delete Successful');
            console.log('DATA', response.data);
            setJournals(response.data);
        });

    };
    
    return (

        <div className={style.journalPage}>

            <form className={style.journalForm} onSubmit={handleSubmit}>
                <input className={style.journalDate}
                    type="date"
                    name="journalDate"
                    value={journalState.journalDate}
                    onChange={handleJournalDateChange}
                />
                <textarea className={style.journalEntry}
                    type="text"
                    name="journalEntry"
                    value={journalState.journalEntry}
                    onChange={handleJournalEntryChange}
                    //placeholder='Your Thoughts'
                    onFocus={(e) => e.target.placeholder = ""} 
                    onBlur={(e) => e.target.placeholder = "What's on your mind?"}
                />
                <button className={style.journalSubmit} type="submit">Submit</button>
            </form>
        </div>

    );

}

export default PortalJournalForm;