import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUsername, removeUsernameSession } from "../../../utils/common";
import style from './style.module.scss';

const logout = () => {
    removeUsernameSession();
    window.location.href='/login';
}

// const username = getUsername();

const PortHeader = () => {

    // const isAdmin = username.includes('admin');

    return (
        <div>
            <section>
            <div className={style.portHead}>
            <h1>Rekindle</h1>
            <div className={style.portOut}>
                <p>Welcome {getUsername()}</p>
                <button className={style.portLog} onClick={() => logout()}><i className="uil uil-sign-out-alt"></i><p>Sign Out</p></button>
            </div>
            </div>
            </section>    

            <section className={style.portSec}>
            <div className={style.portSide}>
                <ul>
                <h4 className={style.portH4}><Link to={'/portal'}>Dashboard</Link></h4>
                <h4 className={style.portH4}><Link to={'/portal/profile'}>Profile</Link></h4>
                <NavLink to={'/portal/entry'}>Entries</NavLink>
                <h4 className={style.portH4}>Prompts</h4>
                <h4 className={style.portH4}>Dates</h4>
                <NavLink to={'/portal/discuss'}>Discuss</NavLink>
                <div></div>
                <NavLink to={'/portal/journal'}>Journal</NavLink>
                {/* {!isAdmin && username ?
                <div></div>
                :
                <div>
                    <br></br>
                    <br></br>
                    <NavLink to={'/#'}>Admin Collection</NavLink>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                } */}
                <h4 className={style.portH4}><a href="/">Home</a></h4>
                </ul>
            </div>
            </section>
        </div>
    )
}

export default PortHeader