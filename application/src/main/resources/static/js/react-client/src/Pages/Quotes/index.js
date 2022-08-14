



import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './style.module.scss'



const Quotes = () => {

        const base_url = 'https://type.fit/api/quotes'
        const [myQuotes, setMyQuotes] = useState([])
        const [loading, setLoading] = useState(true)


        
            useEffect(() => {
            const fetchData = () => {axios.get(base_url).then(response => {
                const randQuote = Math.floor(Math.random()*1643)
                console.log(response.data)
                console.log(response.data[randQuote])
                setMyQuotes(response.data[randQuote])
            })}
            if(myQuotes){
                setLoading(false)
            }

            const timer = setTimeout(() => {
                !myQuotes && fetchData();
            }, 1000);
            return () => clearTimeout(timer);
    


        },[myQuotes])

   
    
    
    return (

        
        

    <div className={style.quotes_page}>
        <h1 className={style.header}>Inspirational Quotes</h1>
    
        {loading ? <h3> Loading.. </h3> :
        <>
        <p> {myQuotes.text}  <span>{myQuotes.author}</span></p>

        </>}
         
        
        <button onClick={() => setMyQuotes(!myQuotes)}>Get Quotes</button>
    
   
    
        
       

</div>
);
}

export default Quotes;