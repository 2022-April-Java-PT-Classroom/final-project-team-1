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
        <div className={style.contactForm}>
            <section className={style.contactFormSection}>
                <div className={style.contactFormContain}>
                    <h2 className={style.contactFormContainH2}>Contact ReKindle</h2>
                    <FormPage onEnteringComment={addContactInfo} />
                </div>
            </section>
        </div>
    );
}
export default Contact;