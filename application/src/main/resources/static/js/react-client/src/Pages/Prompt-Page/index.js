import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getUsername } from "../../utils/common";
import style from "./style.module.scss";


const PromptPage =()=>{

    const [randomPromptQ, setRandomPromptQ]= useState(null);
    const[loading, setLoading]= useState(true);
    const[promptAnswer, setPromptAnswer] = useState(null)
    const username = getUsername();

    
    useEffect(()=> {
        const fetchData = async () => {

            const randomPromptQuestion= [Math.floor(Math.random() * 13) -1];
            const randomPromptQ = await Axios(`http://localhost:8080/prompt/${randomPromptQuestion}`)

            setRandomPromptQ(randomPromptQ.data);

            const promptAnswer =  await Axios(`http://localhost:8080/${username}/prompt`);
            setPromptAnswer(promptAnswer.data);
        };
        if(!username){

        if (randomPromptQ){
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
        <div className={style.wrapper} >
            <h1 className={style.promptTitle}>prompts.</h1>
            <section className={style.promptMain}>
            {loading ? <h3>Loading...</h3> : <h3 className={style.prompt}>Today's Prompt:{randomPromptQ.promptQuestion}</h3>
            
            
            
            }
            </section> 
            <section className={style.userEntry} >

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