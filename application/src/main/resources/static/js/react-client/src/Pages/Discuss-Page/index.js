import React, {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getUsername } from "../../utils/common";
import style from "./style.module.scss";
import DiscussForm from "./DiscussForm";

const username = getUsername();

const DiscussPage = () => {
            
    // AXIOS FETCH QUESTIONS ======================================================================
    const [discuss, setDiscuss] = useState(null);
    const [entry, setEntry] = useState(null);
    const [loading, setLoading] = useState(true);    
    
    useEffect(() => {
        const fetchData = async () => {

        const randId = [Math.floor(Math.random() * 25) + 34];        
        const discussData = await Axios(`http://localhost:8080/api/discuss/${randId}`);
        setDiscuss(discussData.data);

        const discussEntry = await Axios(`http://localhost:8080/api/${username}/discuss`);
        setEntry(discussEntry.data);

    // GRAB DISCUSSION QUESTION ====================================================================
        const quest = discussData.data.discussQuestion;
    };

    // FETCH USER CHECK ===========================================================================
    if(!username) {
        if (discuss) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !discuss && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    } else {
        if (discuss && entry) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !discuss && !entry && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);
    }

}, [discuss, entry]);




    return (
        <div className={style.discussPage}>
            <section className={style.discussSection}>
                <h1 className={style.discussH1}>discuss.</h1>
                {loading ? <h3>Loading...</h3> : <h3 className={style.discussH3}>Question: {discuss.discussQuestion}</h3>}
            </section>

            <DiscussForm quest={discuss && discuss.discussQuestion} />

            <section className={style.discussEntryList}>
                <h2 className={style.discussH2}>Past Entries</h2>
                <div>
                { !username ? 
                <div>
                    <h3>NO ENTRIES - PLEASE LOG IN</h3>
                </div>
                :
                <div>
                    {loading ? <h3>Loading...</h3> : 
                    <ul className={style.discussLinks}>
                        {entry.map((singleEntry) => {
                            return (
                                <li key={singleEntry.discussId} className={style.discussEntryList}><Link className={style.discussBtn} to={`/api/discuss/${singleEntry.discussId}`}>Entry: {singleEntry.discussDate}</Link></li>
                            );
                        })}
                    </ul>
                    }
                </div>
                }
                <div className={style.discussSpacer}></div>
                </div>
            </section>
        </div>
    );
}

export default DiscussPage;