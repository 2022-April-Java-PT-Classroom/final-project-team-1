import React, { useEffect, useState } from "react";
import Axios from "axios";
import { getUsername } from "../../../utils/common";
import style from "./style.module.scss";

const PortDatePage = () => {

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

    return (
    <div>
        <div className={style.portDateMain}>

            <section className={style.portDateSectionOne}>
            <h1 className={style.portDateH1}>dates.</h1>
            {loading ? <h3>Loading...</h3> : 
            <h3 className={style.portDateH3}>Today's Prompt:{randomPromptQ.promptQuestion}</h3>
            }
            </section> 

            <section className={style.portDateSectionTwo} >
                <h2 className={style.portDateH2}>Previous Entries</h2>
                <h3>NO ENTRIES - PLEASE LOG IN</h3>
            </section>

        </div>
    </div>    
    );
}
export default PortDatePage;