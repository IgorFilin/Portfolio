import React from 'react';
import s from './Contacts.module.scss'
import HeaderTitle from "../common/components/HeaderTitle";

export const Contacts = () => {
    return (
        <div className={s.mainBlock}>
        <div className={s.content}>
            <HeaderTitle title={'Contacts'}/>
            <form className={s.formContacts}>
                <input placeholder={'Your Name'} type="text"/>
                <input placeholder={'Your Email'} type="email"/>
                <textarea placeholder={'Your Message'}></textarea>
            </form>
            <button className={s.buttonSubmit}>Submit</button>
        </div>
            </div>
    );
};

