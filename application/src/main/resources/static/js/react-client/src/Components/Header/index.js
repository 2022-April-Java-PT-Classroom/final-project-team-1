import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import style from "./style.module.scss";
import rekindle from "../../assests/logo.png";

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40 ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Header = () => {

    // const { pathname } = useLocation();
    // if (pathname === "/portal") return null;

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
                    <NavLink className={style.navLink} to={'/Resources'}>Resources</NavLink>
                    
                </ul>
                <ul className={style.navList}>
                    <NavLink className={style.navLink} to={'/Signup'}>Sign Up</NavLink>
                    <NavLink className={style.navBtn} to={'/Login'}>Login</NavLink>
                </ul>
            </div>
            <button className={style.navTopBtn} id={"myBtn"} onClick={topFunction}><p className={style.navTopP}>top</p></button>
        </div>
    );
}
export default Header;