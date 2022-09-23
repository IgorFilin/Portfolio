import React from 'react';
import s from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <h3 className={s.textWork}>Considering remote work</h3>
                <button className={s.button}>Hire me</button>
            </div>
        </div>
    );
};
// considering remote work