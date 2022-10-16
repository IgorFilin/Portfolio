import React from 'react';
import s from "./HeaderTitle.module.scss";
import {Fade} from "react-awesome-reveal";


export const HeaderTitle = (props) => {
    return (
        <div className={s.title}>
            <Fade left cascade>
                <h2>{props.title}</h2>
            </Fade >
        </div>
    );
};

export default HeaderTitle;