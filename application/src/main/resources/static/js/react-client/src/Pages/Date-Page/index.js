import React from 'react';
import style from './style.module.scss';

const DatePage =()=>{
    return(
        <div>
            <section className={style.dateMain}>
                <h1 className={style.dateH1}>Date Ideas</h1>
                <p className={style.datePara}></p>
                <form className={style.dateForm}>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>Submit</button>
                </form>
            </section>
            <section className={style.dateEntry}>
                
            </section>
        </div>
    );
}
export default DatePage;