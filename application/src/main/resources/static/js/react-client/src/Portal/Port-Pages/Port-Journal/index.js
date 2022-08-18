import { React, useEffect, useState } from "react";
import Axios from 'axios';
import PortalJournalForm from "./PortJournalForm";
import { getUsername } from "../../../utils/common";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const userName = getUsername();

const PortJournalPage = () => {


    const [journals, setJournals] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(`http://localhost:8080/api/${userName}/journals`);
            setJournals(result.data);
        }

        if (journals) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !journals && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [journals]);

    const handleDelete = (userName, journalId) => {
        Axios.delete(`http://localhost:8080/api/${userName}/journals/${journalId}/delete-journal-entry`).then((response) => {
            console.log('Delete Successful');
            console.log('DATA', response.data);
            setJournals(response.data);
        });
}

    return (
        <div>
            <div className={style.portJournalMain}>
                <section className={style.portJournalSectionOne}>
                    <h1 className={style.portJournalH1}>journal.</h1>
                    <PortalJournalForm journals={journals} setJournals={setJournals} userName={userName} />
                </section>


                <section className={style.portJournalSectionTwo}>
                <h2 className={style.portJournalH2}>Previous Entries</h2>
                <div>
                { !userName ? 
                <div>
                    <h3>NO ENTRIES - PLEASE LOG IN</h3>
                </div>
                :
                <div>
                {loading ? <h3>Loading...</h3> : 
                <div>
                    {journals.map((journal) => {
                        return (
                        <div key={journal.id} className={style.portJournalSingle}>
                            <article className={style.portJournalCards}>
                                <Link className={style.discussBtn} to={`/portal/${userName}/api/journals/${journal.id}`}>
                                    <div className={style.portJournalLinks}>
                                    <p>From: {journal.journalDate}</p>
                                    <i className="uil uil-arrow-right" />
                                    </div>
                                </Link>
                            </article>
                            <button className={style.portJournalDel} onClick={() => handleDelete(userName, journal.id)}>X</button>
                        </div>
                        )})}
                </div>
                }
                </div>
                }
                </div>
                </section>
            </div>
        </div>
    );
}

export default PortJournalPage;