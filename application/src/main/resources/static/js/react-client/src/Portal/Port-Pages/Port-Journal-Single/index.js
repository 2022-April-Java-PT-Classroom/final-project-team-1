import { React, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { getUsername, getOriginalJournalEntry, setOriginalJournalEntrySession } from "../../../utils/common";
import style from './style.module.scss';


const PortJournalSingle = (props) => {
    const userName = getUsername();
    const originalJournalEntry = getOriginalJournalEntry();

    const { id } = useParams();
    const [singleJournal, setSingleJournal] = useState(null);
    const [journalEntry, setJournalEntry] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const result = await Axios(`http://localhost:8080/api/journal/${id}`);
            setSingleJournal(result.data);
            setOriginalJournalEntrySession(result.data.originalJournalEntry);
        }

        if (singleJournal) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !singleJournal && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [singleJournal]);

    // EDIT FUNCTIONS ===============================================

    const handleEditEntryUpdate = (e) => {
    
        const userEdit = {
          journalDate: JSON.stringify(singleJournal.journalDate),
          journalEntry: journalEntry,
          userName: userName
        };
    
        Axios.put(`http://localhost:8080/api/${userName}/journals/${id}/edit-journal-entry`, userEdit).then((response) => {
          console.log('Edit successful');
          console.log('DATA', response.data);
          props.history.push(`/portal/${userName}/api/journals/${id}`);
        });
      };
    
      const handleJournalEntryChange = (e) => {
        const value = e.target.value;
        console.log(value);
        setJournalEntry(value);
      };
    
      console.log('Journal Entry', journalEntry);
      console.log(id);
      console.log(getOriginalJournalEntry());


    return (
        <div>
            <h1 className={style.portJournalH1}>journal entry.</h1>
            <section>
            {loading ? <h3>Loading...</h3> :
                <div className={style.portJournalCont}>
                    <h4 className={style.portJournalDate}>By: {singleJournal.user.username}</h4>
                    <h4 className={style.portJournalDate}>Posted: {singleJournal.journalDate}</h4>
                    <h4 className={style.portJournalAH4}><span>Your Thoughts: </span>{singleJournal.journalEntry}</h4>
                </div>
            }
            </section>

            <hr className={style.portJournalHR} />

            <section className={style.portJournalCont}>
            <h1 className={style.journalH3}>Edit This Entry</h1>
            <form className={style.journalForm} onSubmit={handleEditEntryUpdate}>
                <textarea className={style.journalEntry}
                type="text"
                name="journalEntry"
                defaultValue={singleJournal && singleJournal.journalEntry}
                onChange={(e) => handleJournalEntryChange(e)}
                onBlur={(e) => e.target.placeholder = [originalJournalEntry]}
                onFocus={(e) => e.target.placeholder = ""}/>
                <button className={style.journalSubmit} type="submit">Update</button>
            </form>
            </section>
        </div>
    )
}

export default PortJournalSingle;