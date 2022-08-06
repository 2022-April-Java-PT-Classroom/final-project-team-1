import React, { useEffect, useState } from 'react';
import Axios from "axios";
import style from './style.module.scss';
import { Link } from "react-router-dom";

const DatePage = () => {

    const [loadingDate, setLoadingDate] = useState(true);
    const [dateNight, setDateNight] = useState(null);

    const randomDate = Math.floor((Math.random() * 27));

    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/dateNight/${randomDate}');

            setDateNight(result.data);
        };

        if (dateNight) {
            setLoadingDate(false);
        }

        const timer =setTimeout(() => {
            !dateNight && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [dateNight, randomDate]);


    return (

        
        <div className={style.datePage}>
            <section className={style.dateMain}>
                <h1 className={style.dateH1}>Date Night Inspo</h1>
        {loadingDate ? <h3 className={style.dateLoad}>Creating date night idea just for you...</h3> :       
                <p className={style.datePara}>{dateNight.dateIdea}</p> }
                <h3 className={style.dateTitle}>Tell us your experience</h3>
                <form className={style.dateForm}>
                    <input className={style.dateInput} type="date" placeholder='Enter date'></input>
                    <textarea className={style.userExperience} placeholder='Enter your experience'></textarea>
                    <button className={style.dateBtn}>Submit</button>
                </form>
            </section>
            <section className={style.dateEntry}>

            </section>
            <div className={style.dateSpacer}></div>
        </div>
    );
}
export default DatePage;