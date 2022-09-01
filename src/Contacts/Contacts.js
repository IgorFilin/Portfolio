import React from 'react';
import s from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={s.mainBlock}>
        <div className={s.content}>
            <h3 className={s.text}>Contacts</h3>
            <form className={s.formContacts}>
                <input type="text"/>
                <input type="text"/>
                <textarea className={s.textareaContacts} ></textarea>
            </form>
            <button>Submit</button>
        </div>
            </div>
    );
};

