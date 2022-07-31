import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";
import rekindle from "../../assests/logo.png";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.nav}>
              {/* <img className={style.logo} src={rekindle} alt="logo"/> */}

                <h1 className={style.navHeader}>reKindle</h1>
                <ul className={style.navList}>
                    <NavLink className={style.navLink} to={'/'}>Home</NavLink>
                    <NavLink className={style.navLink} to={'/AboutUs-Page'}>About</NavLink>
                    <NavLink className={style.navLink} to={'/Prompt-Page'}>Prompt</NavLink>
                    <NavLink className={style.navLink} to={'/Date-Page'}>Date</NavLink>
                    <NavLink className={style.navLink} to={'/Discuss-Page'}>Discuss</NavLink>
                    <NavLink className={style.navLink} to={'/Journal-Page'}>Journal</NavLink>
                    <NavLink className={style.navLink} to={'/Contact'}>Contact</NavLink>
                </ul>
                <ul className={style.navList}>
                    <NavLink className={style.navLink} to={'/Signup'}>Sign Up</NavLink>
                    <NavLink className={style.navBtn} to={'/Login'}>Login</NavLink>
                </ul>
            </div>
        </div>
    );
}
export default Header;