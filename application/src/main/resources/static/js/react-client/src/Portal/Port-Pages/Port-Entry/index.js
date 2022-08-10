import {React, useEffect, useState } from "react";
import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import style from './style.module.scss';

const PortalEntry = () => {

    const userName = getUsername();
    const [discuss, setDiscuss] = useState(null);
    const [journals, setJournals] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios("http://localhost:8080/api/admin/journals");

            setJournals(result.data);
            console.log(result.data);
            // setDiscuss(discussData.data);
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
        <div className={style.portEntry}>
            <section className={style.portEntry}>
            <h1 className={style.portH1d}>This is the portal entry page</h1>
            <h1 className={style.portH1d}>This is the portal entry page</h1>
            <h1 className={style.portH1d}>This is the portal entry page</h1>
            {loading ? <h3>Loading...</h3> :
            <div>
                {/* {journals.mapp(journal => (
                <p>{journal.journalEntry}</p> */}
                {/* <p>{discuss.discussAnswerOne}</p> */}
            </div> }
            </section>            
        </div>
    )
}

export default PortalEntry;