import React from "react";
import { useHistory } from "react-router-dom";
import style from "./style.module.scss";
import FormPage from "../form/form";


function Contact() {
    const history = useHistory();

    function addContactInfo(contactData) {
        history.replace('/');
    }

    return (

        <><div className={style.contactForm}>
            <section className={style.contactFormSection}>
                <div className={style.contactFormContain}>
                    <h2 className={style.contactFormContainH2}>Contact ReKindle</h2>
                    <FormPage onEnteringComment={addContactInfo} />
                </div>
            </section>
        </div><div className={style.gridcontainer}>
            
                <div className={style.card}>
                    <h2>Noelle Gisewhite</h2>
                    <div className={style.container}>
                        <h1><img className={style.Img} src="https://media-exp1.licdn.com/dms/image/C5603AQGkPSH6TY4kpw/profile-displayphoto-shrink_200_200/0/1651268817526?e=1663200000&v=beta&t=0tFxMxekMA6_5RIZs45y2xAsk4T3KPtS4e0KYxlGqoQ" alt="noellepic"></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/noellegisewhite">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/noellegisewhite/">LinkedIn</a>
                </div>
                <div className={style.card}>
                    <h2>Zibad Maldaye</h2>
                    <div className={style.container}>
                        <h1> <img className={style.Img} src="https://media-exp1.licdn.com/dms/image/C5603AQGog7mQ9N3D-Q/profile-displayphoto-shrink_200_200/0/1655995697589?e=1663200000&v=beta&t=6MAoLkQGEs7UIwJphXjgHP7azzWWwga4uRWtN8xuPQI" alt="zibadpic"></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/zimmchad">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/zibad/">LinkedIn</a>
                </div>
                <div className={style.card}>
                    <h2>Zaylet Feliciano</h2>
                    <div className={style.container}>
                        <h1> <img classname={style.Img} src="https://media-exp1.licdn.com/dms/image/C4E03AQH0iHWQmxqFiQ/profile-displayphoto-shrink_400_400/0/1658684780805?e=1666224000&v=beta&t=c-jywF6mN_71p4BjLj8-qw6RcrxFpoAFlOR6-f4u10g" alt="zayletpic" width={200} height={200}></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/zaylet">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/zayletfeliciano/">LinkedIn</a>
                </div>
                <div className={style.card}>
                    <h2>Gail Cowley</h2>
                    <div className={style.container}>
                        <h1> <img classname={style.Img} src="https://media-exp1.licdn.com/dms/image/C4D03AQGQczQs6yHrVQ/profile-displayphoto-shrink_400_400/0/1648436352349?e=1665014400&v=beta&t=7vcB9sgHwWyiVmpjHsIRc3o7E9a1AAKBOH8913NIxVk" alt="gailpic" width={200} height={200}></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/gailanne/">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/11gailanne/">LinkedIn</a>
                </div>
                <div className={style.card}>
                    <h2>Joe Buckley</h2>
                    <div className={style.container}>
                        <h1><img classname={style.Img} src="https://media-exp1.licdn.com/dms/image/C5603AQFskh9Jh_DaNg/profile-displayphoto-shrink_400_400/0/1658208866396?e=1665014400&v=beta&t=PlGFoZT5OhIMkNwduccNxouFdc9lQ7syh9GmXxjCgik" alt="joepic" width={200} height={200}></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/joebuck125">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/joe-buckley-4358561a2/">LinkedIn</a>
                </div>
                <div className={style.card}>
                    <h2>Chad Zimmerman</h2>
                    <div className={style.container}>
                        <h1><img className={style.Img} src="https://media-exp1.licdn.com/dms/image/C4D03AQEOcd8Of0HR6A/profile-displayphoto-shrink_200_200/0/1650207672594?e=1663200000&v=beta&t=hPZrEEgpWwJFE5xtqLYDB4oWsngmDx-486EkNOW2Dvo" alt="chadpic"></img>
                        </h1>
                    </div>
                    <h4>Full Stack Developer</h4>
                    <a href="https://github.com/zimmchad">Github</a>
                    <br></br>
                    <a href="https://www.linkedin.com/in/chad-zimmerman-4b4b35220/">LinkedIn</a>
                </div>
                {/* <div className={style.contactForm}>
        <section className={style.contactFormSection}>
            <div className={style.contactFormContain}>
                <h2 className={style.contactFormContainH2}>Contact ReKindle</h2>
                <FormPage onEnteringComment={addContactInfo} />
            </div>
        </section> */}
            </div></>
                    



);
}
export default Contact;