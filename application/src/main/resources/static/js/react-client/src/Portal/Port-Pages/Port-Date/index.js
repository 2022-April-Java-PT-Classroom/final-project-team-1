import { React, useEffect, useState } from "react";
import Axios from "axios";
import PortUserSubmitted from "./PortDateForm";
import { Link } from "react-router-dom";
import { getUsername } from "../../../utils/common";
import style from "./style.module.scss";

const PortDatePage = () => {

    const userName = getUsername();  

    const [randomDateNight, setRandomDateNight] = useState(null);
    const [entry, setEntry] = useState(null);
    const [loading, setLoading] = useState(true);    
    
    useEffect(() => {
        const fetchData = async () => {

        const randomDate = [Math.floor(Math.random() * 27) + 9];        
        const randomDateNight = await Axios(`http://localhost:8080/dateNight/${randomDate}`);
        setRandomDateNight(randomDateNight.data);

        const entry = await Axios(`http://localhost:8080/${userName}/dateNight`);
        setEntry(entry.data);

    // // GRAB DISCUSSION QUESTION ====================================================================
    //     const quest = discussData.data.discussQuestion;
    };

    // FETCH USER CHECK ===========================================================================
    if(!userName) {
        if (randomDateNight) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !randomDateNight && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    } else {
        if (randomDateNight && entry) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !randomDateNight && !entry && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);
    }

}, [randomDateNight, entry]);

    return (
    <div>
        <div className={style.portDateMain}>

            <section className={style.portDateSectionOne}>
            <h1 className={style.portDateH1}>dates.</h1>
            {loading ? <h3>Creating date night idea just for you...</h3> :
            <div>
                <div className={style.randomDateNight}>
                <h3 className={style.portDateH3}>Idea: {randomDateNight.dateIdea}</h3>
                <h3 className={style.portDateH3}>Type: {randomDateNight.dateType}</h3>
                <h3 className={style.portDateH3}>Level: {randomDateNight.dateLevel}</h3>
                </div>
                <PortUserSubmitted randomDateNight={randomDateNight} userName={userName} userEntry={entry && entry} userSubmitted={setEntry} />
            </div> 

            }
            </section> 

            <section className={style.portDateSectionTwo} >
                <h2 className={style.portDateH2}>Previous Entries</h2>
                <div>
                { !userName ? 
                <div>
                    <h3>NO ENTRIES - PLEASE LOG IN</h3>
                </div>
                :
                <div>
                {loading ? <h3>Loading...</h3> : 
                <div>
                    {entry.map((singleEntry) => {
                        return (
                        <div key={singleEntry.dateNightId} className={style.portDateSingle}>
                        <article className={style.portDateCards}>
                            <Link to={`/portal/api/date/${singleEntry.dateNightId}`}>
                                <div className={style.portDateLinks}>
                                <p>From: {singleEntry.dateDate}</p>
                                <i class="uil uil-arrow-right" />
                                </div>
                            </Link>
                         </article>
                         <button className={style.portDateDel}>X</button>
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
export default PortDatePage;