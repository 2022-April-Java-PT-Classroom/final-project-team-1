import React, { useEffect, useState } from "react";
import { getUsername, setUsernameSession } from "../../utils/common";

import Axios from 'axios';
import Journals from "../../Components/journal-component";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

//import Users from "../../Components/user-component";


const JournalPage = () => {

    const userName = getUsername();

    const [loadingJournals, setLoadingJournals] = useState(true),
        [journals, setJournals] = useState(null),
        [loadingEditJournals, setLoadingEditJournals] = useState(true),
        [editJournals, setEditJournals] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await Axios('http://localhost:8080/api/${userName}/journals/${journalId}/edit-journal-entry');
    //         setEditJournals(result.data.userName);
    //         //setUsernameSession(result.data.token, result.data.userName);
    //     }
    //     if (editJournals){
    //         setLoadingEditJournals(false);
    //     }

    //     const timer = setTimeout(() => {
    //         !editJournals && fetchData();
    //     }, 1000);
    //     return () => clearTimeout(timer);

    // }, [editJournals]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`http://localhost:8080/api/${userName}/journals`);
            setJournals(result.data);
            //setUsernameSession(result.data.userName);
        }
        if (journals) {
            setLoadingJournals(false);
        }

        const timer = setTimeout(() => {
            !journals && fetchData();
        }, 1000);
        return () => clearTimeout(timer);

    }, [journals, userName]);

    return (
        <div>
            <div className={style.form__container}>
                <section className={style.journalList}>
                    {loadingJournals ? <h3>Loading Journals...</h3> :
                        <Journals journals={journals} setUsername={userName} />
                    }
                </section>
            </div>
            {/* {loadingEditJournals ? <h3>Loading Journals to Edit...</h3> :
                <>
                    <h2>Here are your previous entries:</h2>
                    <ul>
                        {editJournals.map(journal => (
                            <div key={userName}>
                                <p>{journal.date}</p>
                                <p>{journal.entry}</p>
                            </div>
                        ))}
                    </ul>
                </>
            } */}

    <div className={style.journalPage}>
    <section className={style.journalSection}>
        <h1 className={style.journalH1}>journal.</h1>
    </section>

    <form className={style.journalForm}>
        <input className={style.journalDate} type="date"></input>
        <textarea className={style.journalEntry} type="text" placeholder="Thoughts"></textarea>
        <button className={style.journalSubmit}>Submit</button>
    </form>

    <section className={style.journalSection}>
        <h2 className={style.journalH2}>Past Entries</h2>
        <div className={style.journalLinks}>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
        <div className={style.journalSpacer}></div>
        </div>
    </section>
    </div>
    );
}

export default JournalPage;