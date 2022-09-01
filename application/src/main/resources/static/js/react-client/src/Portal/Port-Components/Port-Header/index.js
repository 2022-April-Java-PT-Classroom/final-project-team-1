import React from "react";
import { Link } from "react-router-dom";
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
                        <i className="uil uil-tachometer-fast-alt" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/profile'}>Profile</Link>
                        <i className="uil uil-user-circle" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/journal'}>Journal</Link>
                        <i className="uil uil-edit" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/dates'}>Dates</Link>
                        <i className="uil uil-crockery" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/prompt'}>Prompts</Link>
                        <i className="uil uil-comment-question" />
                    </div>
                    <div className={style.portLink}>         
                        <Link to={'/portal/discuss'}>Discuss</Link>
                        <i className="uil uil-comment-alt-heart" />
                    </div>
                    <div className={style.portLink}>
                        <Link to={'/portal/entry'}>Entries</Link>
                        <i className="uil uil-list-ul" />
                    </div>

                {!isAdmin  ?
                <div className={style.portLink}></div>
                :
                <div className={style.portLink}>
                    <Link to={'/portal/admin'}>Admin</Link>
                    <i className="uil uil-unlock" />
                </div>
                }
                <div className={style.portLinkHome}>
                    <a href="/">Home</a>
                    <i className="uil uil-house-user" />
                </div>
                </nav>
            </div>
            </section>
        </div>
    )
}

export default PortHeader