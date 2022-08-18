import { React, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import style from './style.module.scss';

const userName = getUsername();

const PortJournalSingle = () => {

    const { id } = useParams();
    const [singleJournal, setSingleJournal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const result = await Axios(`http://localhost:8080/api/${userName}/journals/${id}`);
            setSingleJournal(result.data);
            console.log(result.data);
        }

        if (singleJournal) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !singleJournal && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [singleJournal]);

    return (
        <div>
            <h1 className={style.portDiscussH1}>journal entry.</h1>
            <section>
            {loading ? <h3>Loading...</h3> :
                <div className={style.portDiscussCont}>
                    {/* <h4 className={style.portDissDate}>By: {singleJournal.user.username}</h4> */}
                    <h4 className={style.portDissDate}>Posted: {singleJournal.journalDate}</h4>
                    <h4 className={style.portDissAH4}><span>Your Thoughts: </span>{singleJournal.journalEntry}</h4>
                </div>
            }
            </section>
        </div>
    )
}

export default PortJournalSingle;