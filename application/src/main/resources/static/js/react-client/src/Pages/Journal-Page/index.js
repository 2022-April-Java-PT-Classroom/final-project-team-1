import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const JournalPage = () => {
    return (
    <div className={style.journalPage}>
    <section className={style.journalSection}>
        <h1 className={style.journalH1}>journal.</h1>
    </section>

    <form className={style.journalForm}>
        <input className={style.journalDate} type="date"></input>
        <textarea className={style.journalEntry} type="text" placeholder="Thoughts"></textarea>
        <button className={style.journalSubmit}>Submit</button>
    </form>

    <section className={style.journalSection}>
        <h2 className={style.journalH2}>Past Entries</h2>
        <div className={style.journalLinks}>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
            <Link className={style.journalBtn} to={"#"}>Placeholder</Link>
        <div className={style.journalSpacer}></div>
        </div>
    </section>
    </div>
    );
}

export default JournalPage;