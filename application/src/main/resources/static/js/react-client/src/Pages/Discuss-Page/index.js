import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

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