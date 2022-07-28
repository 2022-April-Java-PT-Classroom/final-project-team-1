import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const DiscussPage =()=>{
    return (
        <div className={style.discussPage}>
            <section>
                <h1>discuss.</h1>
                <h3>Question Placeholder: Lorem Ipsum??</h3>
            </section>

            <form>
                <input type="date"></input>
                <input type="text" placeholder="Your Answer"></input>
                <input type="text" placeholder="Your Partner's Answer"></input>
            </form>

            <section>
                <h2>Previous Entries</h2>
                <div>
                <Link to={"#"}>Placeholder</Link>
                <Link to={"#"}>Placeholder</Link>
                <Link to={"#"}>Placeholder</Link>
                <Link to={"#"}>Placeholder</Link>
                <Link to={"#"}>Placeholder</Link>
                <Link to={"#"}>Placeholder</Link>
                </div>
            </section>
        </div>
    );
}
export default DiscussPage;