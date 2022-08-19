import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getUsername } from "../../../utils/common";
import { Link } from "react-router-dom";
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

            const entryResult =  await Axios(`http://localhost:8080/api/${username}/prompt`);
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
            <h3 className={style.portPromptH3}>Today's Prompt: {prompt.promptQuestion}</h3>
            }
                <form className={style.promptForm}>   
                    <input className={style.promptDate} type='date' placeholder='date'/>  
                    <textarea className={style.promptEntry} type='text' placeholder="Entry"/>
                    <input className={style.promptSubmit} type='submit' value='Submit'/>
                </form>
            </section> 

            <section className={style.portPromptSectionTwo} >
                <h2 className={style.portPromptH2}>Previous Entries</h2>
                <div>
                { !username ? 
                <div>
                    <h3>NO ENTRIES - PLEASE LOG IN</h3>
                </div>
                :
                <div>
                {loading ? <h3>Loading...</h3> : 
                <div>
                    {entry.map((singleEntry) => {
                        return (
                        <div key={singleEntry.id} className={style.portPromptSingle}>
                        <article className={style.portPromptCards}>
                            <Link to={`/portal/api/discuss/${singleEntry.id}`}>
                                <div className={style.portPromptLinks}>
                                <p>From: {singleEntry.promptDate}</p>
                                <i className="uil uil-arrow-right" />
                                </div>
                            </Link>
                         </article>
                         <button className={style.portPromptDel}>X</button>
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
export default PortPromptPage;