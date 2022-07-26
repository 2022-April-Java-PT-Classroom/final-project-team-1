import React from "react";
import style from "./style.module.scss";


const PromptPage =()=>{

    // const promptMain=[prompt, setprompt]= useState(null);
    return(
        <div classname='Wrapper' >
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
                        Entry:
                         <input className={style.textfield} type='text'/> {/*value={this.state.value} onchange={this.handleChange}/> */}
                    </label>
                    <input className={style.submit} type='submit'    value='Submit'/>
                </form>
            </section>

        </div>
    );
}
export default PromptPage;