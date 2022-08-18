import React, { useEffect, useState } from "react";
import Axios from "axios";
import Journals from "../../Components/journal-component";
import { getUsername } from "../../utils/common";
import oJournal from '../../assests/orangejournal.png'
import style from "./style.module.scss";

const PromptPage =()=>{

    const [prompt, setPrompt]= useState(null);
    const[loading, setLoading]= useState(true);
    const userName = getUsername();

    const [journals, setJournals] = useState(null);
    const randomPrompt=[Math.floor(Math.random()*13)+3];
    
    useEffect(()=> {
        const fetchData = async () => {
            const result = await Axios(`http://localhost:8080/prompt/${randomPrompt}`)

            setPrompt(result.data);
            console.log(result.data);
        };
        if (prompt){
            setLoading(false);
        }
        const timer = setTimeout(() => {
            !prompt && fetchData();
        }, 1000);
        return()=> clearTimeout(timer);

    },[prompt]);

    return(
    <div className={style.container}>
        <div className={style.wrapper} >
            <h1 className={style.promptTitle}>prompts.</h1>
            <section className={style.promptMain}>
            {loading ? <h3>Loading...</h3> : <h3 className={style.prompt}>Today's Prompt:{prompt.promptQuestion}</h3>}
            </section> 
            <section className={style.userEntry}>

                <form className={style.entryForm}>
                    <label className={style.date}>
                        Date:
                        <input className={style.dateField} type='date'/>  
                    </label>
                    <label>
                        
                         <textarea className={style.textfield} type='text'placeholder="Entry:"/>
                    </label>
                    <div></div>
                    <div></div>
                    <input className={style.submit} type='submit'    value='Submit'/>
                </form>
            </section>
               
                
        </div>
    </div>    
    );
}
export default PromptPage;