import React from 'react';
import s from "../FooterMessengerCell/FooterMessengerCell.module.scss";
import {Zoom} from "react-awesome-reveal";

const FooterMessengerCell = (props) => {
    return (
        <Zoom bottom>
            <div className={s.blockMessenger}>
                <a href="#">
                    <svg width={'30px'} height={'30px'} className={s.imgMessenger} style={props.style}></svg>
                </a>
            </div>
        </Zoom>
    );
};

export default FooterMessengerCell;