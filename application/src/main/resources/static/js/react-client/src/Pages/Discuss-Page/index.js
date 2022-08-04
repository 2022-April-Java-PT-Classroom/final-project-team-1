import React, {useEffect, useState} from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const [discuss, setDiscuss] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {

        const randId = artCollection[Math.floor(Math.random() * artCollection.length)];
        const result = await Axios(``);
        setPiece(result.data);
    };

    if (piece) {
        setLoading(false);
    }
    
    const timer = setTimeout(() => {
        !piece && fetchData() ;
    }, 1000);
    return () => clearTimeout(timer);
    
}, [piece]);

const DiscussPage =()=>{
    return (
        <div className={style.discussPage}>
            <section className={style.discussSection}>
                <h1 className={style.discussH1}>discuss.</h1>
                <h3 className={style.discussH3}>Question Placeholder: Lorem Ipsum??</h3>
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
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <Link className={style.discussBtn} to={"#"}>Placeholder</Link>
                <div className={style.discussSpacer}></div>
                </div>
            </section>
        </div>
    );
}

export default DiscussPage;