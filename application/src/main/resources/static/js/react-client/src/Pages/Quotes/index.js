import { React, useEffect, useState } from 'react';
import Axios from 'axios';
import style from './style.module.scss'


const Quotes = () => {

        const [myQuotes, setMyQuotes] = useState(null);
        const [loading, setLoading] = useState(true);
        
        useEffect(() => {
            const fetchData = async () => {
                const randQuote = [Math.floor(Math.random() * 10) + 62];
                const response = await Axios(`http://localhost:8080/api/quotes/${randQuote}`);
                console.log(response.data);
                setMyQuotes(response.data);
            }

            if(myQuotes){
                setLoading(false)
            }

            const timer = setTimeout(() => {
                !myQuotes && fetchData();
            }, 1000);
            return () => clearTimeout(timer);
    


        }, [myQuotes]);
    
    return (

    <div className={style.quotes_page}>
        <h1 className={style.quoteHeader}>Inspirational Quotes</h1>
    
        {loading ? <h3> Loading.. </h3> :
        <>
        <p> {myQuotes.quote}  <span className={style.quoteSpan}>{myQuotes.author}</span></p>
        <img className={style.quoteImg} src={myQuotes.imgUrl} alt="quote-image"/>
        </>}
         
        
        <button onClick={() => setMyQuotes(!myQuotes)} className={style.quoteButton}>Get Quotes</button>
    
   
    
        
       

</div>
);
}

export default Quotes;