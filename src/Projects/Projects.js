import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import HeaderTitle from "../common/HeaderTitle";
import social from '.././common/img/socialNetwork.jpg'
import todo from  '../common/img/todolist.jpg'

export const Projects = () => {
    const socialNetwork = {
        backgroundImage:`url(${social})`,
    }
    const todolist = {
        backgroundImage:`url(${todo})`,
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Projects'}/>
                <div className={s.projectsContainer}>
                    <Project style={socialNetwork} title={'Social network'} discription={'Discription project'}/>
                    <Project style={todolist} title={'Todolist'} discription={'Discription project'}/>
                </div>
            </div>
        </div>
    );
};

