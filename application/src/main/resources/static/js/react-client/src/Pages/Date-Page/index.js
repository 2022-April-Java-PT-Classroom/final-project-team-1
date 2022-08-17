import React, { useEffect, useState } from 'react';

import Axios from "axios";
import { Link } from "react-router-dom";
import UserSubmitted from './FormSubmission';
import { getUsername } from '../../utils/common';
import style from './style.module.scss';

const DatePage = () => {

    const username = getUsername();
    const [dateNight, setDateNight] = useState(null);
    const [loadingDate, setLoadingDate] = useState(true);
    const [entry, setEntry] = useState(null);

    const randomDate = Math.floor((Math.random() * 27) + 9);


    useEffect(() => {
        const fetchData = async () => {
            
            const result = await Axios(`http://localhost:8080/dateNight/${randomDate}`);

            setDateNight(result.data);
            console.log(result.data);

            const dateNightEntry = await Axios(`http://localhost:8080/${username}/dateNight`);
            setEntry(dateNightEntry.data);
            console.log(dateNightEntry.data);
        };

        if(!username) {
            if (dateNight) {
                setLoadingDate(false);
            }
            
            const timer = setTimeout(() => {
                !dateNight && fetchData() ;
            }, 1000);
            return () => clearTimeout(timer);
    
        } else {
            if (dateNight && entry) {
                setLoadingDate(false);
            }
            
            const timer = setTimeout(() => {
                !dateNight && !entry && fetchData() ;
            }, 1000);
            return () => clearTimeout(timer);
        }
    
    }, [dateNight, entry]);



    return (
        <div className={style.datePage}>
            <section>
                <h1 className={style.dateH1}>Date Night Ideas.</h1>
                <div>
                    {loadingDate ? <h3 className={style.dateLoad}>Creating date night idea just for you...</h3> :
                    <>
                        <div>
                        <p className={style.datePara}>{dateNight.dateIdea}</p>
                        <p className={style.datePara}>Type: {dateNight.dateType}</p>
                        <p className={style.datePara}>Level: {dateNight.dateLevel}</p>
                        </div>
                    </>}

                    <form action="./FormSubmission">
                        <input type="submit" value="Click here"/>
                    </form>

                    {/* <div>
                        <p>Want to post your experience?</p>
                        <a class="btn" type="button" href="./UserSubmitted">Click Here</a>
                    </div> */}
                    
                    {/* <div>
                        <UserSubmitted userSubmitted={dateNight} username={username} setUserExp={setDateNight} />
                    </div> */}

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