import React from "react";
import Quiz from "../../../Components/Quiz";
import style from './style.module.scss'

const PortalHome = () => {
    return (
        <div className={style.portHomeMain}>
            <section className={style.portHome}>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <Quiz />
            </section>
        </div>
    )
}

export default PortalHome;