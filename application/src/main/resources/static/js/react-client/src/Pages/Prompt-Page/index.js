import React from "react";
import style from "./style.module.scss";
import oJournal from '../../assests/orangejournal.png'

const PromptPage =()=>{

    // const promptMain=[prompt, setprompt]= useState(null);
    return(
    <div className={style.container}>
        <div classname={style.wrapper} >
            <h1 className={style.promptTitle}>'Question of the Day'tbd'</h1>
            <section classNAme={style.promptMain}>
                <h4 className={style.prompt}>Today's Prompt</h4>
            </section> 
            <section className={style.userEntry}>
                <form className={style.entryForm}>
                    <label className={style.date}>
                        Date:
                        <input className={style.dateField} type='text'/>  {/*value={this.state.value} onchange={this.handleChange}/> */}
                    </label>
                    <label>
                        
                         <textarea className={style.textfield} type='text'placeholder="Entry:"/> {/*value={this.state.value} onchange={this.handleChange}/> */}
                    </label>
                    <input className={style.submit} type='submit'    value='Submit'/>
                </form>
            </section>
                <img className={style.filler} src={oJournal}alt='filler'></img>
                
        </div>
    </div>    
    );
}
export default PromptPage;