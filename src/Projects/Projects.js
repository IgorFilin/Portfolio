import React from 'react';
import s from './Projects.module.css'
import {Project} from "./Project/Project";
import HeaderTitle from "../common/HeaderTitle";


export const Projects = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Projects'}/>
                <div className={s.projectsContainer}>
                    <Project title={'Title project'} discription={'Discription project'}/>
                    <Project title={'Title project'} discription={'Discription project'}/>
                    <Project title={'Title project'} discription={'Discription project'}/>
                    <Project title={'Title project'} discription={'Discription project'}/>
                </div>
            </div>
        </div>
    );
};

