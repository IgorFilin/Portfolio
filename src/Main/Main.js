import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainContent}>
            <div className={s.container}>
                <h1 className={s.text}>Hello, my name is Igor, I'm a front-end developer</h1>
                <div className={s.photo}><img src="" alt="My photo"/></div>
            </div>

        </div>
    );
};

