import React, { useEffect, useState } from 'react';
import Axios from "axios";
import style from './style.module.scss';
import { Link } from "react-router-dom";
import UserSubmmited from './FormSubmission';

const DatePage = () => {


    const [dateNight, setDateNight] = useState(null);
    const [loadingDate, setLoadingDate] = useState(true);

    const randomDate = Math.floor((Math.random() * 27) + 9);


    useEffect(() => {
        const fetchData = async () => {
            
            const result = await Axios(`http://localhost:8080/dateNight/${randomDate}`);

            setDateNight(result.data);
        };

        if (dateNight) {
            setLoadingDate(false);
        }

        const timer = setTimeout(() => {
            !dateNight && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [dateNight]);


    return (
        <div className={style.datePage}>
            <section>
                <h1 className={style.dateH1}>Date Night Ideas.</h1>
                <div>
                    {loadingDate ? <h3 className={style.dateLoad}>Creating date night idea just for you...</h3> :
                    <>
                        <p>{dateNight.dateIdea}</p>
                        <p>Type: {dateNight.dateType}</p>
                        <p>Level: {dateNight.dateLevel}</p>
                    </>}

                    <div>
                        <UserSubmmited/>
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