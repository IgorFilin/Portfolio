import React from 'react';
import s from './Project.module.scss'
import {AttentionSeeker} from "react-awesome-reveal";

export const Project = (props) => {
    console.log(props.address)
    return (
        <AttentionSeeker effect={'pulse'}>
            <div className={s.project}>
                <div className={s.imgProject} style={props.style}>
                    <a className={s.buttonViewProject} target='_blank'  href={props.address}>VIEW</a>
                </div>
                <h3 className={s.textTitle}>{props.title}</h3>
            </div>
        </AttentionSeeker>
    );
};

