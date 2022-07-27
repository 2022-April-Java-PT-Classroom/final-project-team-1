import React from "react";
import style from "./style.module.scss";
import rekindle from "../../assests/logo.png";


const AboutUsPage =()=>{


    return(
        <div className={style.container}>
            <img className={style.logo} src={rekindle} alt="logo"/>
            <div className={style.missionWrapper}>
                 <h1 className={style.missionTitle}>Our Mission</h1>
                 <p className={style.mission}>
                    Helping couples reKindle their love by providing impactful and engaging resources to build strong relationships.
                 </p>   
            </div>               
            <div className={style.aboutWrapper}>
                <h2 className={style.aboutTitle}/>
                <p className={style.about}>
                    Dating sites abound, but what do you do <em>after</em> you have found that spark? that is where reKindle comes in. If your goal is to have a vibrant healthy relationship that will endure (you have found the right [place]). ReKindle was created to help couples stay connected or reconnect. The resources and tools are all designed to spark conversation or offer inspiration for creative date nights. No fire will keep burning without fuel and attention. Allow us to help you achieve your relationship goals; we will help you focus your efforts and by providing daily insights and conversation starters as well as weekly date night ideas. Don't let you flames of love be extinguished by negect, rekindle those flames and have a relationhip that others will envy. 

                </p> 

            </div>
        </div>
    );
}
export default AboutUsPage;