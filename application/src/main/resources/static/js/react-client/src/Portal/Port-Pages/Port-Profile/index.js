import React from "react";
import Cliff from '../../../Assets/Images/cliff.jpg';
import Woman from '../../../Assets/Images/profile-woman.jpg';
import { getUsername } from '../../../utils/common';
import style from './style.module.scss';

const username = getUsername();

const PortalProfile = () => {

    const isAdmin = username.includes('admin');

    return (
        <div>
            <h1 className={style.profileH1}>profile.</h1>

            { isAdmin ? 
            <div className={style.profileGrid}>
            <section className={style.profileSecZero}>
                <div className={style.profileContact}>
                <h2 className={style.profileH2}>Contact Me:</h2>
                <i className="uil uil-facebook" />
                <i className="uil uil-twitter" />
                <i className="uil uil-instagram-alt" />
                <i className="uil uil-linkedin" />
                <i className="uil uil-envelope-alt" />
                <i className="uil uil-phone" />
                <i className="uil uil-location-point" />
                </div>
            </section>

            <section className={style.profileSecOne}>
                <div className={style.profileDiv}>
                    <img src={Cliff} className={style.profileImg}></img>
                    <h2 className={style.profileH2}>Cliff Jenkins Jr.</h2>
                    <p className={style.profileP}>Lead Senior Developer for Bread Financial and Part-Time Bootcamp Instructor at We Can Code IT. Loves fishing, BBQing, smoking meats in my spare time.</p>
                </div>
            </section>

            <section className={style.profileSecTwo}>
                <h2 className={style.profileH2}>Details</h2>
                <p className={style.profileP}><span className={style.profileSpan}>Name: </span>Cliff Jenkins Jr.</p>
                <p className={style.profileP}><span className={style.profileSpan}>Pronouns: </span>He/Him</p>
                <p className={style.profileP}><span className={style.profileSpan}>Partner's Name: </span>Mrs. Jenkins</p>
                <p className={style.profileP}><span className={style.profileSpan}>Partner's Pronouns: </span>She/Her</p>
                <p className={style.profileP}><span className={style.profileSpan}>Location: </span>Ohio, USA</p>
            </section>

            <section className={style.profileSecTwo}>
                <h2 className={style.profileH2}>About</h2>
                <p className={style.profileP}>Experienced lead software engineer, certified professional Scrum master, and certified Scrum product owner with a demonstrated history of working in the information technology and services industry. Seasoned Java and JavaScript full stack bootcamp instructor.</p>
            </section>
            </div>

            :

            <div className={style.profileGrid}>
            <section className={style.profileSecZero}>
                <div className={style.profileContact}>
                <h2 className={style.profileH2}>Contact Me:</h2>
                <i className="uil uil-facebook" />
                <i className="uil uil-twitter" />
                <i className="uil uil-instagram-alt" />
                <i className="uil uil-linkedin" />
                <i className="uil uil-envelope-alt" />
                <i className="uil uil-phone" />
                <i className="uil uil-location-point" />
                </div>
            </section>

            <section className={style.profileSecOne}>
                <div className={style.profileDiv}>
                    <img src={Woman} className={style.profileImg}></img>
                    <h2 className={style.profileH2}>Jane Doe</h2>
                    <p className={style.profileP}>I'm Jane! I am a proud dog mom, an avid gym-goer, and, if you ask my friends, a bit quirky at times. My partner and I have been together for 6 years.</p>
                </div>
            </section>

            <section className={style.profileSecTwo}>
                <h2 className={style.profileH2}>Details</h2>
                <p className={style.profileP}><span className={style.profileSpan}>Name: </span>Jane Doe</p>
                <p className={style.profileP}><span className={style.profileSpan}>Pronouns: </span>She/Her</p>
                <p className={style.profileP}><span className={style.profileSpan}>Partner's Name: </span>Janet Doe</p>
                <p className={style.profileP}><span className={style.profileSpan}>Partner's Pronouns: </span>She/Her</p>
                <p className={style.profileP}><span className={style.profileSpan}>Location: </span>Ohio, USA</p>
            </section>

            <section className={style.profileSecTwo}>
                <h2 className={style.profileH2}>About</h2>
                <p className={style.profileP}>Jane Doe is a data analyst with a passion for studying relationships, personal growth, and health. In 2009, Jane earned a Bachelors of Science from the University of Ohio, where she studied business and finance and taught interpersonal communication.</p>
            </section>
            </div>
            }
        </div>
    )
}

export default PortalProfile;