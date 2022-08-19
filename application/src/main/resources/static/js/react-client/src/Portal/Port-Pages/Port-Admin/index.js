import {React, useEffect, useState} from "react";
import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import style from './style.module.scss';
import { Link } from "react-router-dom";

const PortalAdmin = () => {

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
            setDiscuss(discussData.data);
            setDates(dateData.data);

            console.log(journalData.data);
            console.log(discussData.data);
            console.log(dateData.data);
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
            <h1 className={style.entryH1}>View All Submitted Entries</h1>
            {loading ? <h3>Loading...</h3> :
            <div className={style.entryCardsContain}>
                {dates.map(date => (
                    <div key={date.datenightId} className={style.entryCardDates}>
                    <p>Posted: {date.dateDate}</p>
                    <p>By: {date.user.username}</p>
                    <p>Date Idea: {date.dateIdea}</p>
                    <p>{date.dateNotes.slice(0,200)+'...'}</p>
                    <Link to={`/portal/dateNight/${date.datenightId}`}>Read More</Link>
                </div>
                ))}

                {discuss.map(discuss => (
                    <div key={discuss.discussId} className={style.entryCardDiscuss}>
                    <p>Posted: {discuss.discussDate}</p>
                    <p>By: {discuss.discussUser.username}</p>
                    <p>Discussion Question: {discuss.discussQuestion.slice(0,75)+'...'}</p>
                    <p>Answer One: {discuss.discussAnswerOne.slice(0,75)+'...'}</p>
                    <p>Answer Two: {discuss.discussAnswerTwo.slice(0,75)+'...'}</p>
                    <Link to={`/portal/api/discuss/${discuss.discussId}`}>Read More</Link>
                </div>
                ))}

                {journals.map(journal => (
                <div key={journal.id} className={style.entryCardJournal}>
                    <p>Posted: {journal.journalDate}</p>
                    <p>By: {journal.user.username}</p>
                    <p>Journal Entry: {journal.journalEntry.slice(0,200)+'...'}</p>
                    <Link to={`/portal/api/journal/${journal.id}`}>Read More</Link>
                </div>
                ))}
            </div>}
            </section>            
        </div>
    )
}

export default PortalAdmin;