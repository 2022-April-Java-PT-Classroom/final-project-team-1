import {React, useState} from "react";
import Quiz from "../../../Components/Quiz";
import style from './style.module.scss'


const PortalHome = () => {

    const [showQuiz, setShowQuiz] = useState(true);

    return (
        <div className={style.portHomeMain}>
            <section className={style.portHome}>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <button onClick={() => {setShowQuiz(true)}}>Start Quiz</button>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            </section>

            {showQuiz && <Quiz quizShown={setShowQuiz} />}
            
        </div>
    )
}

export default PortalHome;