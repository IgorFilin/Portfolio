import React from 'react';
import s from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <h2 className={s.text}>Projects</h2>
                <div className={s.projectsContainer}>
                    <Project title={'Title project'} discription={'Discription project'}/>
                    <Project title={'Title project'} discription={'Discription project'} discription={'Discription project'}/>
                    <Project title={'Title project'} discription={'Discription project'} discription={'Discription project'}/>
                    <Project title={'Title project'} discription={'Discription project'}/>
                </div>
            </div>
        </div>
    );
};

