import React, {useState} from 'react';

import axios from 'axios';
import style from './style.module.scss';

const Journals = ({user,journals}) => {
    
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
            journalEntry: journalState.journalEntry
        };

        axios.post('http://localhost:8080/api/${userName}/journals/add-journal-entry', userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setJournalsState(response.data);
        });
    };

    const handleDelete = (userName, journalId) => {
        axios.delete(`http://localhost:8080/api/${userName}/journals/${journalId}/delete-journal-entry`).then((response) => {
            console.log('Delete Successful');
            console.log('DATA', response.data);
            setJournalsState(response.data);
        });
    }

    const handleEditEntryUpdate = (userName, journalId, journalDate, journalEntry) => {
        const userData = {
            user: userName,
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

        <div className={style.journalForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="journalDate"
                    value={journalState.journalDate}
                    onChange={handleJournalDateChange}
                    placeholder='Please enter todays date'
                />
                <input
                    type="text"
                    name="journalEntry"
                    value={journalState.journalEntry}
                    onChange={handleJournalEntryChange}
                    placeholder='What is on your mind today?'
                />
                <button type="submit">Submit Journal Entry</button>
            </form>
            <h3 className={style.h3}>Previous Journal Entries</h3>
            <div className={style.journalsContainer}>
                {journalsState.map(journal => (
                    <div className={style.journalContainer} key={journal.id}>
                        <p className={journal.selected ? style.selected : null} onClick={() => handleEditEntryUpdate(user.name, journal.id, journal.journalDate, journal.journalEntry)}>{journal.journalDate}<button onClick={() => handleDelete(user.name, journal.id)}>x</button></p>
                    </div>
                ))}
            </div>
        </div>

    );
    
}

export default Journals;