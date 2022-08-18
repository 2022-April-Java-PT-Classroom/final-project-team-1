import { React, useEffect, useState } from "react";
import Axios from 'axios';
import Journals from "./PortJournalForm";
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

    return (
        <div>
            <div className={style.portJournalMain}>
                <section className={style.portJournalSectionOne}>
                    <h1 className={style.portJournalH1}>journal.</h1>
                    <Journals journals={journals} setJournals={setJournals} userName={userName} />
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
                        <article key={journal.id} className={style.portJournalCards}>
                            <Link className={style.discussBtn} to={`/portal/${userName}/api/journals/${journal.id}`}>
                                <div className={style.portJournalLinks}>
                                <p>From: {journal.journalDate}</p>
                                <i class="uil uil-arrow-right" />
                                </div>
                            </Link>
                         </article>
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