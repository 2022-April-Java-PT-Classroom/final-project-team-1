import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUsername, removeUsernameSession } from "../../../utils/common";

import React from "react";
import style from './style.module.scss';

const logout = () => {
    removeUsernameSession();
    window.location.href='/login';
}

const username = getUsername();

const PortHeader = () => {

    const isAdmin = username.includes('admin');

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
                <nav className={style.portNav}>
                <Link to={'/portal'}>Dashboard</Link>
                <Link to={'/portal/profile'}>Profile</Link>
                <Link to={'/portal/entry'}>Entries</Link>
                <Link to={'/'}>Prompts</Link>
                <Link to={'/'}>Dates</Link>
                <Link to={'/portal/discuss'}>Discuss</Link>
                <Link to={'/portal/journal'}>Journal</Link>
                {!isAdmin && username ?
                <div></div>
                :
                <div>
                <Link to={'/#'}>Admin Collection</Link>
                </div>
                }
                <a href="/">Home</a>
                </nav>
            </div>
            </section>
        </div>
    )
}

export default PortHeader