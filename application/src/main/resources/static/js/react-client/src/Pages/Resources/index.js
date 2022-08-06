import React from "react";
import style from "./style.module.scss";
import rekindle from "../../assests/logo.png";

const Resources = () => {
    return (
        <div className={style.container}>
            <div className={style.resourcesWrapper}>
                 <h1 className={style.resourcesTitle}>Resources To Improve Communication With Your Partner</h1>
                 </div>
        <div className={style.resourcePage}>
            <h1>Helpful Websites</h1>
            <div>
            <img src="https://th.bing.com/th?q=Wedding+Holding+Hands&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="marriagepic"></img>
            <a href="https://www.marriage.com/">Marriage and Relationship Advice</a>
            </div>
            <div>
            <img src="https://th.bing.com/th?q=Gary+Chapman+5+Love+Languages&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="languagepic"></img>
            <a href="https://5lovelanguages.com/">Love Languages</a>
            </div>
            <div>
            <img src="https://th.bing.com/th?q=A+Couple+Not+Communicating&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="communicationpic"></img>
            <a href="https://www.liveabout.com/quiz-how-strong-are-your-communication-skills-as-a-couple-4093553?quizResult=2abe9a32">Communication Skills Quiz</a>
            </div>
            <div>
            <img src="https://th.bing.com/th/id/OIP.TYjf4An3P0GzpnK8kAfD-wHaHL?w=133&h=147&c=7&r=0&o=5&pid=1.7" alt="twitterpic"></img>
            <a href="https://twitter.com/CommunicateWell">Social Media</a>
            </div>
        </div>
        </div>
    );

}


export default Resources;