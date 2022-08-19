import React, { useEffect, useState } from 'react';
import Axios from "axios";
import UserSubmitted from './FormSubmission';
import { Link } from "react-router-dom";
import { getUsername } from '../../utils/common';
import style from './style.module.scss';

const DatePage = () => {
    const userName = getUsername();  

    const [randomDateNight, setRandomDateNight] = useState(null);
    const [userEntry, setUserEntry] = useState(null);
    const [loadingDate, setLoadingDate] = useState(true);

    
    useEffect(() => {
        const fetchData = async () => {
            
            const randomDate = [Math.floor(Math.random() * 27) + 9];
            const randomDateNight = await Axios(`http://localhost:8080/dateNight/${randomDate}`);

            setRandomDateNight(randomDateNight.data);
            console.log(randomDateNight.data);

            const userEntry = await Axios(`http://localhost:8080/${userName}/dateNight`);
            setUserEntry(userEntry.data);
            console.log(userEntry.data);
        };

        
        if(!userName){
            if(randomDateNight) {
                setLoadingDate(false);
            }
    
            const timer = setTimeout(() => {
                !randomDateNight && fetchData();
            }, 1000);
            
            return () => clearTimeout(timer);
            
        } else {
            if (randomDateNight && userEntry) {
                setLoadingDate(false);
            }

            const timer = setTimeout(() => {
                !randomDateNight && !userEntry && fetchData();
            }, 1000);
            return () => clearTimeout(timer);
        }
        
    }, [randomDateNight, userEntry, userName]);


    return (
        <div className={style.datePage}>
            <section>
                <h1 className={style.dateH1}>Date Night Ideas.</h1>
                <div>
                    {loadingDate ? <h3 className={style.dateLoad}>Creating date night idea just for you...</h3> :
                    <ul className={style.randomDateNight}> 
                       
                        
                        <ul className={style.dateIdea}>Idea: {randomDateNight.dateIdea}</ul>
                        <ul>Type: {randomDateNight.dateType}</ul>
                        <ul>Level: {randomDateNight.dateLevel}</ul>
                        
                    
                    </ul>
                    }
                    
                    <div>
                        {randomDateNight && <UserSubmitted randomDateNight={randomDateNight} userName={userName} userEntry={userEntry && userEntry} userSubmitted={setUserEntry} />}
                    </div>

                </div>
            </section>
            <div className={style.dateSpacer}></div>    
        </div>
    );
}
export default DatePage;