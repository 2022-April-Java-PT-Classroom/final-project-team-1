import {React, useEffect, useState} from "react";

import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import style from './style.module.scss';

const PortalEntry = () => {

    const userName = getUsername();
    const [discuss, setDiscuss] = useState(null);
    const [journals, setJournals] = useState(null);
    const [dates, setDates] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const journalData = await Axios(`http://localhost:8080/api/${userName}/journals`);
            const discussData = await Axios(`http://localhost:8080/api/${userName}/discuss`);
            const dateData = await Axios(`http://localhost:8080/${userName}/dateNight`)

            setJournals(journalData.data);
            console.log(journalData.data);
            setDiscuss(discussData.data);
            setDates(dateData.data);
        }

        if (journals && discuss && dates) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
        !journals && !discuss && !dates && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [journals, discuss, dates]);


    return (
        <div className={style.portEntry}>
            <section className={style.portEntry}>
            <h1 className={style.portH1d}>This is the portal entry page</h1>
            <h1 className={style.portH1d}>This is the portal entry page</h1>
            <h1 className={style.portH1d}>This is the portal entry page</h1>
            {loading ? <h3>Loading...</h3> :
            <div>
                {journals.map(journal => (<p key={journal.id}>Journal Entry: {journal.journalDate}</p>))}
                {discuss.map(discuss => (<p key={discuss.discussId}>Discuss Entry: {discuss.discussDate}</p>))}
                {dates.map(date => (<p key={date.datenightId}>Datenight Entr: y</p>))}
            </div>}
            </section>            
        </div>
    )
}

export default PortalEntry;