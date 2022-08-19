import {React, useEffect, useState} from "react";
import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import { Link } from "react-router-dom";
import style from './style.module.scss';

const PortalEntry = () => {

    const userName = getUsername();
    const [discuss, setDiscuss] = useState(null);
    const [journals, setJournals] = useState(null);
    const [dates, setDates] = useState(null);
    const [prompts, setPrompts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const journalData = await Axios(`http://localhost:8080/api/${userName}/journals`);
            const discussData = await Axios(`http://localhost:8080/api/${userName}/discuss`);
            const dateData = await Axios(`http://localhost:8080/${userName}/dateNight`);
            const promptData = await Axios(`http://localhost:8080/api/${userName}/prompt`);

            setJournals(journalData.data);
            setDiscuss(discussData.data);
            setDates(dateData.data);
            setPrompts(promptData.data);
        }

        if (journals && discuss && dates && prompts) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
        !journals && !discuss && !dates && !prompts && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [journals, discuss, dates, prompts]);


    return (
        <div className={style.portEntry}>
            <section className={style.portEntry}>
            <h1 className={style.entryH1}>View Your Entries</h1>
            {loading ? <h3>Loading...</h3> :
            <div className={style.entryCardsContain}>
                {prompts.map(prompt => (
                    <div key={prompt.id} className={style.entryCardPrompt}>
                    <p>Posted: {prompt.promptDate}</p>
                    <p>By: {prompt.user.username}</p>
                    <p>Prompt Question: {prompt.promptQuestion}</p>
                    <p>Answer: {prompt.promptAnswer.slice(0,75)+'...'}</p>
                    <Link to={`/portal/api/prompt/${prompt.id}`}>Read More</Link>
                </div>
                ))}

                {dates.map(date => (
                    <div key={date.datenightId} className={style.entryCardDates}>
                    <p>Posted: {date.dateDate}</p>
                    <p>By: {date.user.username}</p>
                    <p>Date Idea: {date.dateIdea}</p>
                    <p>{date.dateNotes.slice(0,200)+'...'}</p>
                    <Link to={`/portal/api/date/${date.dateNightId}`}>Read More</Link>
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

export default PortalEntry;