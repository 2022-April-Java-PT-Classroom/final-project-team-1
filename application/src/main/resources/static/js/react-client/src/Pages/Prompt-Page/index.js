import React, { useEffect, useState } from "react";
import Axios from "axios";
import oJournal from '../../assests/orangejournal.png'
import style from "./style.module.scss";

const PromptPage =()=>{

    const [prompt, setPrompt]= useState(null);
    const[loading, setLoading]= useState(true);

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
        <div classname={style.wrapper} >
            <h1 className={style.promptTitle}>prompts.</h1>
            <section classNAme={style.promptMain}>
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