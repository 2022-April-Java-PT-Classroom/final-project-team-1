import { React, useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
import Axios from 'axios';
import style from './style.module.scss';

const PortDateSingle = () => {

    const { id } = useParams();
    const [singleDate, setSingleDate] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {

            const result = await Axios(`http://localhost:8080/dateNight/${id}`);
            setSingleDate(result.data);
            console.log(singleDate);
        }

        if (singleDate) {
            setLoading(false);
        }
        
        const timer = setTimeout(() => {
            !singleDate && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [singleDate]);

    return (
        <div>
            <h1 className={style.portDiscussH1}>date entry.</h1>
            <section>
            {loading ? <h3>Loading...</h3> :
                <div className={style.portDiscussCont}>
                    <h4 className={style.portDissDate}>By: {singleDate.user.username}</h4>
                    <h4 className={style.portDissDate}>Posted: {singleDate.dateDate}</h4>
                    <h4 className={style.portDissQH4}><span>Idea: </span>{singleDate.dateIdea}</h4>
                    <h4 className={style.portDissAH4}><span>Type: </span>{singleDate.dateType}</h4>
                    <h4 className={style.portDissAH4}><span>Level: </span>{singleDate.dateLevel}</h4>
                    <h4 className={style.portDissAH4}><span>Your Experience: </span>{singleDate.dateNotes}</h4>
                </div>
            }
            </section>
        </div>
    )
}

export default PortDateSingle;