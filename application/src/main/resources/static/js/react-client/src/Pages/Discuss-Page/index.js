import React, {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

var discussCollection;

const DiscussPage = () => {
    // FETCH ID ==========================================================

        fetch("http://localhost:8080/api/discuss")
            .then(response => response.json())
            .then(jsonData => discussCollection = jsonData)
            .catch(err => console.log(err));
            
    // AXIOS ==============================================================
    
    const [discuss, setDiscuss] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {

        const randId = [Math.floor(Math.random() * 25) + 34];
        const result = await Axios(`http://localhost:8080/api/discuss/${randId}`);
        setDiscuss(result.data);
    };

    if (discuss) {
        setLoading(false);
    }
    
    const timer = setTimeout(() => {
        !discuss && fetchData() ;
    }, 1000);
    return () => clearTimeout(timer);

}, [discuss]);

    return (
        
        <div className={style.discussPage}>
            <section className={style.discussSection}>
                <h1 className={style.discussH1}>discuss.</h1>
                {loading ? <h3>Loading...</h3> : <h3 className={style.discussH3}>Question: {discuss.discussQuestion}</h3>}
            </section>

            <form className={style.discussForm}>
                <input className={style.discussDate} type="date"></input>
                <textarea className={style.discussEntry} type="text" placeholder="Your Answer"></textarea>
                <textarea className={style.discussEntry} type="text" placeholder="Your Partner's Answer"></textarea>
                <button className={style.discussSubmit}>Submit</button>
            </form>

            <section className={style.discussSection}>
                <h2 className={style.discussH2}>Past Entries</h2>
                <div className={style.discussLinks}>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"/#"}>Placeholder</Link>
                <div className={style.discussSpacer}></div>
                </div>
            </section>
        </div>
    );
}

export default DiscussPage;