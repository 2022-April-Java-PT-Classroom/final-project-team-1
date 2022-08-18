import React from "react";
import style from "./resourcestyle.module.scss";

const Resources = () => {
    return (
        <div>
        <section className={style.resource}>
          <div className={style.resourceTitle}>
            <h1>Resources to Improve Communication With Your Partner</h1>
            </div>
        <div className={style.resourcePage}>
           
            <div className={style.table}>
            <img className={style.Img} src="https://th.bing.com/th?q=Wedding+Holding+Hands&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="marriagepic"></img>
            <a href="https://www.marriage.com/">Marriage and Relationship Advice</a>
            </div>
            
            <div className={style.table}>
            <img className={style.Img} src="https://th.bing.com/th?q=Gary+Chapman+5+Love+Languages&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="languagepic"></img>
            <a href="https://5lovelanguages.com/">Love Languages</a>
            </div>
            
            <div className={style.table}>
            <img className={style.Img} src="https://th.bing.com/th?q=A+Couple+Not+Communicating&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="communicationpic"></img>
            <a href="https://www.liveabout.com/quiz-how-strong-are-your-communication-skills-as-a-couple-4093553?quizResult=2abe9a32">Communication Skills Quiz</a>
            </div>
            
            <div className={style.table}>
            <img className={style.Img} src="https://th.bing.com/th?q=Twitter+Symbol+No+Background&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=moderate&t=1&mw=247" alt="twitterpic"></img>
            <a href="https://twitter.com/CommunicateWell">Social Media</a>
            </div>
            </div>
            </section>
        </div>
  
      
    );

}


export default Resources;