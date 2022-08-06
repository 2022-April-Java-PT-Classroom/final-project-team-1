import React from "react";
import { NavLink } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

const Footer = () => {

    const { pathname } = useLocation();
    if (pathname === "/Signup") return null;
    if (pathname === "/Login") return null;

    return (
        <div className={style.footer}>
            <section className={style.footerNewsletter}>
                <h2 className={style.footerNewsH2}>Relationship Tips Straight To Your Inbox</h2>
                <h3 className={style.footerNewsH3}>Subscribe To Our Newsletter</h3>
                <input type="text" placeholder="Email" className={style.footerForm}></input>
                <input type="submit" value="Subscribe" className={style.footerFormBtn}></input>
            </section>

            <div className={style.footerSpacer}></div>

            <section className={style.footerLogo}>
                <div>
                    <h2>Rekindle</h2>
                </div>
                <div>
                    <Link className={style.footerBtn}>Sign Up</Link>
                    <Link className={style.footerBtn}>Login</Link>
                </div>
            </section>

            <section className={style.footerLinksSection}>
                <div className={style.footerLinksList}>
                    <h2>Features</h2>
                    <Link className={style.footerLinks}>Prompts</Link>
                    <Link className={style.footerLinks}>Dates</Link>
                    <Link className={style.footerLinks}>Discussions</Link>
                    <Link className={style.footerLinks}>Journal</Link>
                    <Link to={'/Quotes'} className={style.footerLinks}>Inspirational Quotes</Link>
                </div>
                <div>
                    <h2>Resources</h2>
                    <Link className={style.footerLinks}>Therapists</Link>                    
                    <Link to={'/Love-page'} className={style.footerLinks}>Love Languages</Link>
                    <Link className={style.footerLinks}>Couples Counseling</Link>
                </div>
                <div>
                    <h2>Company</h2>
                    <Link className={style.footerLinks}>Contact</Link>
                    <Link className={style.footerLinks}>About Us</Link>
                    <Link className={style.footerLinks}>The Project</Link>
                </div>
            </section>

            <section className={style.footerCopy}>
                <div className={style.footerCopyText}>
                    <h6 className={style.footerCopyH6}>&copy; 2022 - REKINDLE | WCCI Team 1</h6>
                </div>
            </section>
        </div>
    )
}
export default Footer;