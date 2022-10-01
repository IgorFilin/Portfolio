import React from 'react';
import s from "./HeaderTitle.module.scss";

export const HeaderTitle = (props) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default HeaderTitle;