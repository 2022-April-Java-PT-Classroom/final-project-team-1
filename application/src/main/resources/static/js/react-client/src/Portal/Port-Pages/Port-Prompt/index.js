import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getUsername } from "../../../utils/common";
import style from "./style.module.scss";


const username = getUsername();

const PortPromptPage = () => {

    const[prompt, setPrompt]= useState(null);
    const[entry, setEntry] = useState(null)
    const[loading, setLoading]= useState(true);

    useEffect(()=> {
        const fetchData = async () => {

            const randId= [Math.floor(Math.random() * 11) + 72];
            const result = await Axios(`http://localhost:8080/api/prompt/single-prompt/72`)
            setPrompt(result.data);
            console.log(result.data);

            const entryResult =  await Axios(`http://localhost:8080/${username}/prompt`);
            setEntry(entryResult.data);
        };

    if(!username) {
        if (prompt) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !prompt && fetchData();
        }, 1000);

        return()=> clearTimeout(timer);
        } else{
            if(prompt && entry  ){
                setLoading(false);
            }
        const timer = setTimeout(() => {
            !prompt && !entry && fetchData();
        }, 1000);
        return ()=> clearTimeout(timer);   
    }
}, [prompt, entry]);

    return(
    <div className={style.container}>
        <div className={style.portPromptMain}>

            <section className={style.portPromptSectionOne}>
            <h1 className={style.portPromptH1}>prompts.</h1>
            {loading ? <h3>Loading...</h3> : 
            <h3 className={style.portPromptH3}>Today's Prompt:{prompt.promptQuestion}</h3>
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