import React from 'react';
import s from "../FooterMessengerCell/FooterMessengerCell.module.scss";
import Zoom from 'react-reveal/Zoom';
import {AttentionSeeker} from "react-awesome-reveal";

const FooterMessengerCell = (props) => {
    return (
        <Zoom bottom>
            <AttentionSeeker effect={'tada'}>
            <div className={s.blockMessenger}>
                <a target='_blank' href={props.addressMessenger}>
                    <svg width={'30px'} height={'30px'} className={s.imgMessenger} style={props.style}></svg>
                </a>
            </div>
            </AttentionSeeker>
        </Zoom>
    );
};

export default FooterMessengerCell;