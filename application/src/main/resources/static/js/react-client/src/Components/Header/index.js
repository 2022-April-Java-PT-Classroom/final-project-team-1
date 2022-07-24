import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <img src={logo192} className={style.logo192}></img>
                <ul className={style.navList}>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/AboutUs-Page'}>About</NavLink>
                    <NavLink to={'/Contact'}>Contact</NavLink>
                    <NavLink to={'/Date-Page'}>Date</NavLink>
                    <NavLink to={'/Discuss-Page'}>Discuss</NavLink>
                    <NavLink to={'/Prompt-Page'}>Prompt</NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Header;