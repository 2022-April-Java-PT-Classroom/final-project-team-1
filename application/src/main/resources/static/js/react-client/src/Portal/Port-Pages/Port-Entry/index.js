import {React, useEffect, useState} from "react";

import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import style from './style.module.scss';
import { Link } from "react-router-dom";

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
            const dateData = await Axios(`http://localhost:8080/${userName}/dateNight`);

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
            <h1 className={style.portH1d}>View Your Entries</h1>
            {loading ? <h3>Loading...</h3> :
            <div className={style.entryCards}>
                {journals.map(journal => (
                    <div key={journal.id}>
                    <p>Posted: {journal.journalDate}</p>
                    <p>By: {journal.user.username}</p>
                    <p>Posted: {journal.journalEntry}</p>
                    <Link to={`/portal/api/journal/${journal.id}`}>Read More</Link>
                    </div>
                ))}

                {discuss.map(discuss => (
                    <div key={discuss.discussId}>
                    <p>Posted: {discuss.discussDate}</p>
                    <p>By: {discuss.discussUser.username}</p>
                    <p>{discuss.discussQuestion}</p>
                    <p>{discuss.discussAnswerOne}</p>
                    <Link to={`/portal/api/discuss/${discuss.discussId}`}>Read More</Link>
                    </div>
                ))}

                {dates.map(date => (
                    <div key={date.datenightId}>
                    <p>Posted: {date.dateDate}</p>
                    <p>By: {date.user.username}</p>
                    <p>{date.dateIdea}</p>
                    <p>{date.dateNotes}</p>
                    <Link to={`/portal/dateNight/${date.datenightId}`}>Read More</Link>
                </div>
                ))}
            </div>}
            </section>            
        </div>
    )
}

export default PortalEntry;