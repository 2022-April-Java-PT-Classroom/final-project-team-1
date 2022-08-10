import React from "react";
import { Link, NavLink } from "react-router-dom";
import { getUsername, removeUsernameSession } from "../../../utils/common";
import style from './style.module.scss';

const logout = () => {
    removeUsernameSession()
    window.location.href='/login'
}

const PortHeader = () => {
    return (
        <div>
            <section>
            <div className={style.portHead}>
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
            <h1>Rekindle</h1>
            <div className={style.portOut}>
                <p>Welcome {getUsername()}</p>
                <button className={style.portLog} onClick={() => logout()}><i className="uil uil-sign-out-alt"></i><p>Sign Out</p></button>
            </div>
            </div>
            </section>    

            <section className={style.portSec}>
            <div className={style.portSide}>
                <h4 className={style.portH4}><Link to={'/portal'}>Dashboard</Link></h4>
                <h4 className={style.portH4}><Link to={'/portal/profile'}>Profile</Link></h4>
                <NavLink to={'/portal/entry'}>Entries</NavLink>
                <h4 className={style.portH4}>Prompts</h4>
                <h4 className={style.portH4}>Dates</h4>
                <h4 className={style.portH4}>Discuss</h4>
                <h4 className={style.portH4}>Journal</h4>
                <h4 className={style.portH4}><a href="/">Home</a></h4>
            </div>
            </section>
        </div>
    )
}

export default PortHeader