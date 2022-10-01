import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import HeaderTitle from "../common/components/HeaderTitle";
import social from '.././common/img/socialNetwork.jpg'
import todo from  '../common/img/todolist.jpg'
import count from  '../common/img/counter.PNG'

export const Projects = () => {
    const socialNetwork = {
        backgroundImage:`url(${social})`,
    }
    const todolist = {
        backgroundImage:`url(${todo})`,
    }
    const counter = {
        backgroundImage:`url(${count})`,
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Projects'}/>
                <div className={s.projectsContainer}>
                    <Project style={socialNetwork} title={'Social network'} discription={'Discription project'}/>
                    <Project style={todolist} title={'Todolist'} discription={'Discription project'}/>
                    <Project style={counter} title={'Counter'} discription={'Discription project'}/>
                </div>
            </div>
        </div>
    );
};

