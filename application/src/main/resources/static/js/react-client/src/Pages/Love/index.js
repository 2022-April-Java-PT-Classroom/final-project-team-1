
import React from "react";
import style from './style.module.scss'

const LoveLanguages  =() => {
    return (
        <div className={style.lovePage}>
            <h1 className={style.loveHeader}>Love languages </h1>
            <p className={style.loveP}>There are five diffrent ways to show love to your partner: </p>
            
                <h3>Words of affirmation</h3>
                <h3>Acts of Service</h3>
                <h3>Receiving gifts</h3>
                <h3>Quality time</h3>
                <h3>Physical touch</h3>
            
            <p className={style.loveL}>To learn more, please <span>visit</span>  
            <a  className={style.loveA} href="https://www.familycentre.org/news/post/5-different-ways-to-show-love-and-improve-your-relationship"> love languages.</a></p>

        </div>
    )
}
export default LoveLanguages;