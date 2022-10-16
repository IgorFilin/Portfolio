import React from 'react';
import s from './Contacts.module.scss'
import HeaderTitle from "../common/components/HeaderTitle";
import { Zoom} from "react-awesome-reveal";

export const Contacts = () => {
    return (
        <div id='contacts' className={s.mainBlock}>
            <Zoom left className={s.content}>
            <div className={s.content}>
                <HeaderTitle title={'Contacts'}/>
                <form className={s.formContacts}>
                    <input placeholder={'Your Name'} type="text"/>
                    <input placeholder={'Your Email'} type="email"/>
                    <textarea placeholder={'Your Message'}></textarea>
                </form>
                <button className={s.buttonSubmit}>Submit</button>
            </div>
            </Zoom>
        </div>

    );
};

