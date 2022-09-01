import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <h2 className={s.text}>Skills</h2>
                <div className={s.skillsBlock}>
                    <Skill title={'title skill'} discription={'discription skill'}/>
                    <Skill title={'title skill'} discription={'discription skill'}/>
                    <Skill title={'title skill'}discription={'discription skill'}/>
                    <Skill title={'title skill'}discription={'discription skill'}/>
                    <Skill title={'title skill'}discription={'discription skill'}/>
                    <Skill title={'title skill'}discription={'discription skill'}/>
                </div>
            </div>
        </div>
    );
};

