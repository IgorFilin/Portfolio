import React from 'react';
import s from './Contacts.module.css'
import HeaderTitle from "../common/HeaderTitle";

export const Contacts = () => {
    return (
        <div className={s.mainBlock}>
        <div className={s.content}>
            <HeaderTitle title={'Contacts'}/>
            <form className={s.formContacts}>
                <input type="text"/>
                <input type="text"/>
                <textarea className={s.textareaContacts} ></textarea>
            </form>
            <button className={s.buttonSubmit}>Submit</button>
        </div>
            </div>
    );
};

