import React, { useEffect, useState } from 'react';

import Axios from "axios";
import { Link } from "react-router-dom";
import UserSubmitted from './FormSubmission';
import { getUsername } from '../../utils/common';
import style from './style.module.scss';

const DatePage = () => {

    const userName = getUsername();  
    const [dateNight, setDateNight] = useState(null);
    const [userEntry, setUserEntry] = useState(null);
    const [loadingDate, setLoadingDate] = useState(true);

    


    useEffect(() => {
        const fetchData = async () => {
            
            const dateNight = Math.floor((Math.random() * 27) + 9);
            const result = await Axios(`http://localhost:8080/dateNight/${dateNight}`);

            setDateNight(result.data);
            console.log(result.data);

            const userEntry = await Axios(`http://localhost:8080/${userName}/dateNight`);
            setUserEntry(userEntry.data);
        };

        if(!userName) {
            if (dateNight) {
                setLoadingDate(false);
            }
    
            const timer = setTimeout(() => {
                !dateNight && fetchData();
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            if (dateNight && userEntry) {
                setLoadingDate(false);
            }

            const timer = setTimeout(() => {
                !dateNight && !userEntry && fetchData();
            }, 1000);
            return () => clearTimeout(timer);
        }
        
    }, [userName, dateNight, userEntry]);


    return (
        <div className={style.datePage}>
            <section>
                <h1 className={style.dateH1}>Date Night Ideas.</h1>
                <div>
                    {loadingDate ? <h3 className={style.dateLoad}>Creating date night idea just for you...</h3> :
                    <>
                    {dateNight && dateNight.map(dateNight => (
                        <div key={dateNight.dateNightId}>
                        <p>Idea: {dateNight.dateIdea}</p>
                        <p>Type: {dateNight.dateType}</p>
                        <p>Level: {dateNight.dateLevel}</p>
                        </div>
                    ))}
                        
                        
                    </>}
                    
                    <div>
                        <UserSubmitted userSubmitted={userEntry} userName={userName} setDateNight={setDateNight} dateNight={dateNight} />
                    </div>

                </div>
            </section>
            <div className={style.dateSpacer}></div>    
        </div>
        


        // <div className={style.datePage}>
        //     <section className={style.dateAPI}>
        //         <h1 className={style.dateH1}>Date Night Ideas.</h1>
        //         <div> 
        //             {loadingDate ? <h3 className={style.dateLoad}>Creating date night idea just for you...</h3> :       
        //             <p className={style.datePara}>{dateNight.dateIdea}</p> }      
        //         </div>

             
                // <h3 className={style.dateTitle}>Tell us your experience on this date</h3>
                // <form className={style.dateForm}>
                //     <input className={style.dateInput} type="date"></input>
                //     <textarea className={style.userExperience} placeholder='Enter your experience'></textarea>
                //     <button className={style.dateBtn}>Submit</button>
                // </form>
        //     </section>
        //     <div className={style.dateSpacer}></div>
        // </div>
    );
}
export default DatePage;