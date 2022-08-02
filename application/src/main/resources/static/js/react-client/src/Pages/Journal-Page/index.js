import React, { useEffect, useState } from "react";

import Axios from 'axios';
import Journals from "../../Components/journal-component";
import Users from "../../Components/user-component";
import style from "./style.module.scss";

const JournalPage =()=>{

    const [loadingJournals, setLoadingJournals] = useState(true),
        [journals, setJournals] = useState(null),
        [loadingEditJournals, setLoadingEditJournals] = useState(true),
        [editJournals, setEditJournals] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/api/${userName}/journals/${journalId}/edit-journal-entry');
            setEditJournals(result.data);
        }
        if (editJournals){
            setLoadingEditJournals(false);
        }

        const timer = setTimeout(() => {
            !editJournals && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
        
    }, [editJournals]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/api/${userName}/journals');
            setJournals(result.data);
        }
        if (journals){
            setLoadingJournals(false);
        }

        const timer = setTimeout(() => {
            !journals && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
        
    }, [journals]);
    
    return(
        <div>
            <div className={style.form__container}>
                <section className={style.journalList}>
                    {loadingJournals ? <h3>Loading Journals...</h3> :
                        <Journals journals={journals} setUserName={Users.userName} />
                    }
                </section>
            </div>
            {loadingEditJournals ? <h3>Loading Journals to Edit...</h3> :
                <>
                    <h2>Here are your previous entries:</h2>
                    <ul>
                        {editJournals.map(journal => (
                            <div key={Users.userName}>
                                <p>{journal.date}</p>
                                <p>{journal.entry}</p>
                            </div>
                        ))}
                    </ul>
                </>
            }
        </div>
    );
}
export default JournalPage;