import {React, useEffect, useState} from "react";
import Axios from 'axios';
import { getUsername } from "../../../utils/common";
import Quiz from "../../../Components/Quiz";
import style from './style.module.scss'


const PortalHome = () => {

    const userName = getUsername();
    const [showQuiz, setShowQuiz] = useState(false);
    const [discuss, setDiscuss] = useState(null);
    const [journals, setJournals] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const journalData = await Axios(`http://localhost:8080/api/${userName}/journals`);
            const discussData = await Axios(`http://localhost:8080/api/${userName}/discuss`);

            setJournals(journalData.data);
            console.log(journalData.data);
            setDiscuss(discussData.data);
            console.log(discussData.data);
        }

        if (journals && discuss) {
            setLoading(false);
        }

        const timer = setTimeout(() => {
        !journals && !discuss && fetchData() ;
        }, 1000);
        return () => clearTimeout(timer);

    }, [journals, discuss]);

    return (
        <div className={style.portHomeMain}>
            <section className={style.portHome}>
            <button onClick={() => {setShowQuiz(true)}}>Start Quiz</button>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            <h1 className={style.portH1}>This is the portal homepage page</h1>
            </section>

            <section>
            {loading ? <h3>Loading...</h3> :
                <div>
                    <h2>{journals.length}</h2>
                    <h2>{discuss.length}</h2>

                    <table>
                        <thead>
                            <tr>
                            <th>Date</th>
                            <th>Entry</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {journals.map(journal =>
                        <tr key={journal.id}>
                            <td>{journal.journalDate}</td>
                            <td>{(journal.journalEntry).slice(0,25)+'...'}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                        )}
                        {discuss.map(diss =>
                            <tr key={diss.discussId}>
                                <td>{diss.discussDate}</td>
                                <td>{(diss.discussQuestion).slice(0,25)+'...'}</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }
            </section>

            {showQuiz && <Quiz quizShown={setShowQuiz} />}
            
        </div>
    )
}

export default PortalHome;