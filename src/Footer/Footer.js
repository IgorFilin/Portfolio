import React from 'react';
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.contentBlock}>
                <h3>Igor Filin</h3>
                <div className={s.block}>
                    <div className={s.childrenBlock}></div>
                    <div className={s.childrenBlock}></div>
                    <div className={s.childrenBlock}></div>
                    <div className={s.childrenBlock}></div>
                </div>
                <h3> &copy; All rights reserved</h3>
            </div>
        </div>
    );
};

