import React, {useState} from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.scss';

const Journals = ({userName, journals}) => {
    
    const [journalsState, setJournalsState] = useState(journals);

    const [journalState, setJournalState] = useState({
        journalDate:"",
        journalEntry:"",
        userName: ""
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
        e.preventdefault();

        const userData = {
            journalDate: journalState.journalDate,
            journalEntry: journalState.journalEntry,
            userName: journalState.userName
        };

        axios.post(`http://localhost:8080/api/${userName}/journals/add-journal-entry`, userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setJournalsState(response.data.userName);
        });
    };

    const handleDelete = (userName, journalId) => {
        axios.delete(`http://localhost:8080/api/${userName}/journals/${journalId}/delete-journal-entry`).then((response) => {
            console.log('Delete Successful');
            console.log('DATA', response.data);
            setJournalsState(response.data.userName);
        });
    }

    const handleEditEntryUpdate = (userName, journalId, journalDate, journalEntry) => {
        const userData = {
            userName: userName,
            journalDate: journalDate,
            journalEntry: journalEntry
        }
        axios.put(`http://localhost:8080/api/${userName}/journals/${journalId}/edit-journal-entry`, userData).then((response) => {
            console.log('Edit successful');
            console.log('DATA', response.data);
            setJournalsState(response.data);
        });
    }

    return (

        <div className={style.journalPage}>
    <section className={style.journalSection}>
        <h1 className={style.journalH1}>journal.</h1>
    </section>

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
                    placeholder='Your Thoughts'
                    // onFocus={(e) => e.target.placeholder = ""} 
                    // onBlur={(e) => e.target.placeholder = "Your Thoughts"}
                />
                <button className={style.journalSubmit} type="submit">Submit</button>
            </form>
            <section className={style.journalSection}>
            {/* <h3 className={style.h3}>Previous Journal Entries</h3>
            <div className={style.journalsContainer}> */}
                {journalsState.map(journal => (
                    <div className={style.journalLinks} key={journal.id}>
                        <p className={journal.selected ? style.selected : null} onClick={() => handleEditEntryUpdate(journal.id, journal.journalDate, journal.journalEntry)}>{journal.date}<button onClick={() => handleDelete(journal.id)}>x</button></p>
                        <Link className={style.journalBtn} to={"#"}>{journal.entry}</Link>
                    <div className={style.journalSpacer}></div>    
                    </div>
                ))}
            {/* </div> */}
            </section>
        </div>

    );
    
}

export default Journals;