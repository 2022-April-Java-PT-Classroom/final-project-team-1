import { NavLink } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo192.png";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.nav}>
                <img src={logo} className={style.logo}></img>
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