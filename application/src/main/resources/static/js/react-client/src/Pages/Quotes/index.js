import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import style from './style.module.scss'

const Quotes = () => {

     ''
    
    const [quotes, setQuotes] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
         const fetchData = async () => {
            const randomId = Math.floor(Math.random()*10) + 1;
            const result = await Axios(`http://localhost:8080/api/quotes/${randomId}`);
            setQuotes(result.data)
        };
        
        if(quotes){
            setLoading(false);
        }

        const timer = setTimeout(() => {
            !quotes && fetchData();
        }, 1000);
        return clearTimeout(timer);
        

    }, [quotes]);
    return <div className={style.quotes_page}>
        <h1 className={style.header}>Inspirational Quotes</h1>
        <p>Qoutes to be displayed <span>(Author)</span></p>
        
        
        <img src="#" alt={"Quote image"}/>


    </div>
}

export default Quotes;