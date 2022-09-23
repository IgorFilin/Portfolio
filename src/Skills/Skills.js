import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import HeaderTitle from "../common/HeaderTitle";

export const Skills = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Skills'}/>
                <div className={s.skillsBlock}>
                    <Skill title={'Title skill'} discription={'discription skill'}/>
                    <Skill title={'Title skill'} discription={'discription skill'}/>
                    <Skill title={'Title skill'}discription={'discription skill'}/>
                    <Skill title={'Title skill'}discription={'discription skill'}/>
                    <Skill title={'Title skill'}discription={'discription skill'}/>
                    <Skill title={'Title skill'}discription={'discription skill'}/>
                </div>
            </div>
        </div>
    );
};

