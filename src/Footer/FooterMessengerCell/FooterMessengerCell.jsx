import React from 'react';
import s from "../FooterMessengerCell/FooterMessengerCell.module.css";

const FooterMessengerCell = (props) => {
    return (
        <div className={s.blockMessenger}>
            <a href="#">
            <svg width={'30px'} height={'30px'} className={s.imgMessenger} style={props.style}></svg>
        </a>
        </div>
    );
};

export default FooterMessengerCell;