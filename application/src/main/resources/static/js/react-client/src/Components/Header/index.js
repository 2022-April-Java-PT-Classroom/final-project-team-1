import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <h1 className={style.navHeader}>reKindle</h1>
                <ul className={style.navList}>
                    <NavLink className={style.navLink} to={'/'}>Home</NavLink>
                    <NavLink className={style.navLink} to={'/AboutUs-Page'}>About</NavLink>
                    <NavLink className={style.navLink} to={'/Contact'}>Contact</NavLink>
                    <NavLink className={style.navLink} to={'/Date-Page'}>Date</NavLink>
                    <NavLink className={style.navLink} to={'/Discuss-Page'}>Discuss</NavLink>
                    <NavLink className={style.navLink} to={'/Prompt-Page'}>Prompt</NavLink>
                    <NavLink className={style.navLink} to={'/Journal-Page'}>Journal</NavLink>
                </ul>
            </div>
        </div>
    );
}
export default Header;