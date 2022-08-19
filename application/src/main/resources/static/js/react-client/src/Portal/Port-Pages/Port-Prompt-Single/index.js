import { React, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Axios from 'axios';
import style from './style.module.scss';

const PortPromptSingle = () => {

    const { id } = useParams();
    const [singlePrompt, setSinglePrompt] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const result = await Axios(`http://localhost:8080/api/prompt/single-prompt/${id}`);
            setSinglePrompt(result.data);
        }

        if (singlePrompt) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !singlePrompt && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [singlePrompt]);

    return (
        <div>
            <h1 className={style.portPromptH1}>prompt entry.</h1>
            <section>
            {loading ? <h3>Loading...</h3> :
                <div className={style.portPromptCont}>
                    <h4 className={style.portPromptDate}>By: {singlePrompt.user.username}</h4>
                    <h4 className={style.portPromptDate}>Posted: {singlePrompt.promptDate}</h4>
                    <h4 className={style.portPromptQH4}><span>Question: </span>{singlePrompt.promptQuestion}</h4>
                    <h4 className={style.portPromptAH4}><span>Your Answer: </span>{singlePrompt.promptAnswer}</h4>
                </div>
            }
            </section>
        </div>
    )
}

export default PortPromptSingle;