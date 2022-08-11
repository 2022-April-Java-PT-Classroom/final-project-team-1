import { React, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Axios from 'axios';
import style from "./style.module.scss";

const DiscussSingle = () => {


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
            <div className={style.discussSpacer}></div>
            <section>
            <h1>THIS IS A SINGLE DISCUSS PAGE</h1>
            <h1>THIS IS A SINGLE DISCUSS PAGE</h1>
            <h1>THIS IS A SINGLE DISCUSS PAGE</h1>
            <h1>THIS IS A SINGLE DISCUSS PAGE</h1>
            <h1>THIS IS A SINGLE DISCUSS PAGE</h1>
            </section>

            <section>
            {loading ? <h3>Loading...</h3> :
                <div>
                    <h4>{singleDiscuss.discussUser.username}</h4>
                    <h4>{singleDiscuss.discussDate}</h4>
                    <h4>{singleDiscuss.discussQuestion}</h4>
                    <h4>{singleDiscuss.discussAnswerOne}</h4>
                    <h4>{singleDiscuss.discussAnswerTwo}</h4>
                </div>
            }
            </section>
            <div className={style.discussSpacer}></div>
        </div>

    )
}

export default DiscussSingle;