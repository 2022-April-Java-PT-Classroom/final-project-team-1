import { React, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Axios from 'axios';
import style from './style.module.scss';

const PortDiscussSingle = () => {

    const { id } = useParams();
    const [singleDiscuss, setSingleDiscuss] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const result = await Axios(`http://localhost:8080/api/discuss/${id}`);
            setSingleDiscuss(result.data);
            console.log(singleDiscuss);
        }

        if (singleDiscuss) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !singleDiscuss && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [singleDiscuss]);

    return (
        <div>
            <h1 className={style.portDiscussH1}>discussion entry.</h1>
            <section>
            {loading ? <h3>Loading...</h3> :
                <div className={style.portDiscussCont}>
                    <h4 className={style.portDissDate}>By: {singleDiscuss.discussUser.username}</h4>
                    <h4 className={style.portDissDate}>Posted: {singleDiscuss.discussDate}</h4>
                    <h4 className={style.portDissQH4}><span>Question: </span>{singleDiscuss.discussQuestion}</h4>
                    <h4 className={style.portDissAH4}><span>Your Answer: </span>{singleDiscuss.discussAnswerOne}</h4>
                    <h4 className={style.portDissAH4}><span>Your Partner's Answer: </span>{singleDiscuss.discussAnswerTwo}</h4>
                </div>
            }
            </section>
        </div>
    )
}

export default PortDiscussSingle;