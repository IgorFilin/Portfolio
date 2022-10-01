import React from 'react';
import s from './Project.module.scss'
export const Project = (props) => {
    return (
        <div className={s.project}>
            <div className={s.imgProject} style={props.style}>
                <a className={s.buttonViewProject} href='#' >VIEW</a>
            </div>
            <h3 className={s.textTitle}>{props.title}</h3>
            <h4 className={s.textDiscription}>{props.discription}</h4>
        </div>
    );
};

