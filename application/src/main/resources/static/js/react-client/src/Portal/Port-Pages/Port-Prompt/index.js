import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getUsername } from "../../../utils/common";
import style from "./style.module.scss";


const PortPromptPage = () => {

    const username = getUsername();
    const[randomPromptQ, setRandomPromptQ]= useState(null);
    const[loading, setLoading]= useState(true);
    const[promptAnswer, setPromptAnswer] = useState(null)

    useEffect(()=> {
        const fetchData = async () => {

            const randomPromptQuestion= [Math.floor(Math.random() * 13) -1];
            const randomPromptQ = await Axios(`http://localhost:8080/prompt/${randomPromptQuestion}`)

            setRandomPromptQ(randomPromptQ.data);

            const promptAnswer =  await Axios(`http://localhost:8080/${username}/prompt`);
            setPromptAnswer(promptAnswer.data);
        };

        if(!username) {

        if (randomPromptQ) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !randomPromptQ && fetchData();
        }, 1000);

        return()=> clearTimeout(timer);
        } else{
            if(randomPromptQ && promptAnswer  ){
                setLoading(false);
            }
        const timer = setTimeout(() => {
            !randomPromptQ && !promptAnswer && fetchData();
        }, 1000);
        return ()=> clearTimeout(timer);   
    }
}, [randomPromptQ, promptAnswer, username]);

    return(
    <div className={style.container}>
        <div className={style.portPromptMain}>

            <section className={style.portPromptSectionOne}>
            <h1 className={style.portPromptH1}>prompts.</h1>
            {loading ? <h3>Loading...</h3> : 
            <h3 className={style.portPromptH3}>Today's Prompt:{randomPromptQ.promptQuestion}</h3>
            }
                <form className={style.entryForm}>   
                    <input className={style.dateField} type='date' placeholder='date'/>  
                    <textarea className={style.textfield} type='text' placeholder="Entry"/>
                    <input className={style.submit} type='submit' value='Submit'/>
                </form>
            </section> 

            <section className={style.portPromptSectionTwo} >
                <h2 className={style.portPromptH2}>Previous Entries</h2>
                <h3>NO ENTRIES - PLEASE LOG IN</h3>
            </section>

        </div>
    </div>    
    );
}
export default PortPromptPage;