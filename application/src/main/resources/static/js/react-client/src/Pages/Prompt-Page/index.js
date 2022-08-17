import React, {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { getUsername } from "../../utils/common";
import style from "./style.module.scss";

const username = getUsername();

const PromptPage =()=>{


    const [prompt, setPrompt]= useState(null);
    const [entry, setEntry] = useState(null);
    const[loading, setLoading]= useState(true);

    useEffect(()=> {

        
        const fetchData = async () => {
            
            const randomId=[Math.floor(Math.random()*13)+3];
            const promptData = await Axios(`http://localhost:8080/prompt/${randomId}`)
            setPrompt(promptData.data);

            console.log(promptData.data);

            const promptEntry = await Axios(`http://localhost:8080/api/${username}/prompt`);
            setEntry(promptEntry.data);
               
            const quest = promptData.data.promptQuestion;
       
       
       
       
        };
        if (!username){
        if (prompt){
            setLoading(false);
        }
        const timer = setTimeout(() => {
            !prompt && fetchData();
        }, 1000);
        return()=> clearTimeout(timer);

    }else{
        if (prompt && entry){
            setLoading(false);
        }
        const timer =setTimeout(()=>{
            !prompt && !entry && fetchData();
        },1000);
        return ()=> clearTimeout(timer);
    }
 } ,[prompt, entry]);

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
                        <input className={style.dateField} type='date'/>  {/*value={this.state.value} onchange={this.handleChange}/> */}
                    </label>
                    <label>
                        
                         <textarea className={style.textfield} type='text'placeholder="Entry:"/> {/*value={this.state.value} onchange={this.handleChange}/> */}
                    </label>
                    <input className={style.submit} type='submit'    value='Submit'/>
                </form>
            </section>
                {/* <img className={style.filler} src={oJournal}alt='filler'></img> */}
                
        </div>
    </div>    
    );
}
export default PromptPage;