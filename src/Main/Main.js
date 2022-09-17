import React from 'react';
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainContent}>
            <div className={s.container}>
                <article className={s.text}><h5 className={s.textHello}>Hello,</h5>
                    <h1>I’m<strong className={s.textName}> IGOR FILIN</strong></h1>
                    <p className={s.textDeveloper}>frontend developer</p>
                </article>
                <div className={s.photo}>
                    <img src="" alt="My photo"/>
                </div>
            </div>

        </div>
    );
};

