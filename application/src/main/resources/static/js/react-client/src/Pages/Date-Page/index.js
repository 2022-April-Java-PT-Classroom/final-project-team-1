import React, { useEffect } from 'react';
import axios from 'axios';
import style from './style.module.scss';
import { Link } from "react-router-dom";

const DatePage = ({dateNight}) => {

    const [dateNight, setDateNight] = useState(null);
    const [loading, setLoading] = useSate(null);

    useEffect(() => {
        const fetchData = async () => {
            const dateNightIdea = await Axios('http://localhost:8080/dateNight/add-dateNight');
            setDateNight(dateNightIdea.data);
        };

        if (dateNight) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !dateNight && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
    }, [dateNight]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     axios.post('http://localhost:8080/dateNight/add-dateNight', userData).then((response) => {
    //         console.log(response.status);
    //         console.log('DATA', response.data);
    //     });

    // };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios('http://localhost:8080/dateNight');
    //         console.log(result);
    //     }


    //     fetchData();

    //     // eslint-disable-next-line
    // }, []);

    return (
        loading ? <h3>Creating Date Night Idea...</h3> :
        <div className={style.datePage}>
            <section className={style.dateMain}>
                <h1 className={style.dateH1}>Date Ideas</h1>
                <p className={style.datePara}>{dateNight.dateIdea}</p>
                <form onSubmit={handleSubmit} className={style.dateForm}>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>Submit</button>
                </form>
            </section>
            <section className={style.dateEntry}>

            </section>
            <div className={style.dateSpacer}></div>
        </div>
    );
}
export default DatePage;