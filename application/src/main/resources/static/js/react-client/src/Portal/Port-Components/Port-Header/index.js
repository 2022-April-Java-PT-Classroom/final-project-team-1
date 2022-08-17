import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUsername, removeUsernameSession } from "../../../utils/common";
import Flame from "../../../Assets/Images/rek-new.svg";
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
            <img className={style.portLogo} src={Flame} />
            <div className={style.portOut}>
                <p className={style.portWelcome}>Welcome {getUsername()}</p>
                <button className={style.portLog} onClick={() => logout()}><i className="uil uil-sign-out-alt" /><p>Sign Out</p></button>
            </div>
            </div>
            </section>    

            <section className={style.portSec}>
            <div className={style.portSide}>
                <nav className={style.portNav}>
                    <div className={style.portLink}>
                        <Link to={'/portal'}>Dashboard</Link>
                        <i class="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/profile'}>Profile</Link>
                        <i class="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/entry'}>Entries</Link>
                        <i class="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/'}>Prompts</Link>
                        <i class="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/'}>Dates</Link>
                        <i class="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>         
                        <Link to={'/portal/discuss'}>Discuss</Link>
                        <i class="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/journal'}>Journal</Link>
                        <i class="uil uil-edit" />
                    </div>

                {!isAdmin  ?
                <div className={style.portLink}></div>
                :
                <div className={style.portLink}>
                    <Link to={'/#'}>Admin Collection</Link>
                    <i class="uil uil-edit" />
                </div>
                }

                <div className={style.portLink}>
                    <a href="/">Home</a>
                    <i class="uil uil-edit" />
                </div>
                </nav>
            </div>
            </section>
        </div>
    )
}

export default PortHeader