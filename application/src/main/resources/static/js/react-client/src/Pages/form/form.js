import React, { useRef } from "react";
import style from './style.module.scss';

const FormPage = (props) => {

    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const commentInput = useRef();

    function submitController(event) {
        event.preventDefault();

        const enteredFirstName = firstNameInput.current.value;
        const enteredLastName = lastNameInput.current.value;
        const enteredEmail = emailInput.current.value;
        const enteredPhone = phoneInput.current.value;
        const enteredComment = commentInput.current.value;

        const contactData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            phone: enteredPhone,
            comment: enteredComment,
        }

        console.log(contactData);
        props.onEnteringComment(contactData);
    }

    return (
        <div>
            <form className={style.form} onSubmit={submitController}>
                <div className={style.control}>
                    <label htmlFor='first-name'>First Name</label>
                    <input type='text' required id='first-name' ref={firstNameInput}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='last-name'>Last Name</label>
                    <input type='text' required id='last-name' ref={lastNameInput}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required id='email' ref={emailInput}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' required id='phone' ref={phoneInput}/>
                </div>
                <div className={style.control}>
                    <label htmlFor='description'>Comments</label>
                    <textarea id='description' required row='5' ref={commentInput}></textarea>
                </div>
            </form>
        </div>
    )
}
export default FormPage;