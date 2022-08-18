import {React, useEffect, useState} from 'react';
import Axios from "axios";
import PortDiscussForm from './PortDiscussForm';
import { getUsername } from '../../../utils/common';
import { Link } from "react-router-dom";
import style from './style.module.scss';

const username = getUsername();

const PortDiscuss = () => {

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
        <div className={style.portDiscussMain}>

            <section className={style.portDiscussSectionOne}>
            <h1 className={style.portDiscussH1}>discuss.</h1>
            {loading ? <h3>Loading...</h3> : <h3 className={style.portDiscussH3}>Question: {discuss.discussQuestion}</h3>}
            <PortDiscussForm quest={discuss && discuss.discussQuestion} />
            </section>


            <section className={style.portDiscussSectionTwo}>
            <h2 className={style.portDiscussH2}>Previous Entries</h2>
                <div>
                { !username ? 
                <div>
                    <h3>NO ENTRIES - PLEASE LOG IN</h3>
                </div>
                :
                <div>
                {loading ? <h3>Loading...</h3> : 
                <div>
                    {entry.map((singleEntry) => {
                        return (
                        <div key={singleEntry.discussId} className={style.portDiscussSingle}>
                        <article className={style.portDiscussCards}>
                            <Link className={style.discussBtn} to={`/portal/api/discuss/${singleEntry.discussId}`}>
                                <div className={style.portDiscussLinks}>
                                <p>From: {singleEntry.discussDate}</p>
                                <i class="uil uil-arrow-right" />
                                </div>
                            </Link>
                         </article>
                         <button className={style.portDiscussDel}>X</button>
                         </div>
                        )})}
                </div>
                }
                </div>
                }
                </div>
            </section>
        </div>
    )
}

export default PortDiscuss;