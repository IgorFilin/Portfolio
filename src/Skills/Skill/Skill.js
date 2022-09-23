import React from 'react';
import s from './Skill.module.css'

export const Skill = (props) => {
    return (
        <div className={s.skillContainer}>
            <div className={s.icon}></div>
            <h3 className={s.titleSkill}>{props.title}</h3>
            <h4 className={s.textDiscription}>{props.discription}</h4>
        </div>
    );
};

