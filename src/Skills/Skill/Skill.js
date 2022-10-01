import React from 'react';
import s from './Skill.module.scss'

export const Skill = (props) => {
    return (
        <div className={s.skillContainer}>
            <div className={s.iconContainer}>
                <div className={s.iconBody} ></div>
                <svg width={'55px'} height={'55px'}  className={s.iconImg} style={props.style}></svg>
            </div>
            <h3 className={s.titleSkill}>{props.title}</h3>
        </div>
    );
};

