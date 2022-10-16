import React from 'react';
import s from './Footer.module.scss'
import FooterMessengerCell from "./FooterMessengerCell/FooterMessengerCell";
import vk from "../common/img/icons/vk.svg";
import tg from "../common/img/icons/tg.svg";
import wa from "../common/img/icons/wa.svg";
import linked from "../common/img/icons/in.svg";
import {createURL} from "../common/utils/functionsUtils";
import {Zoom} from "react-awesome-reveal";

export const Footer = () => {
    return (
        <div className={s.mainBlock}>
            <Zoom Bottom>
            <div className={s.contentBlock}>
                <h3 className={s.myName}>Igor Filin</h3>
                <div className={s.block}>
                    <FooterMessengerCell style={createURL(vk)}/>
                    <FooterMessengerCell style={createURL(tg)} />
                    <FooterMessengerCell style={createURL(wa)}/>
                    <FooterMessengerCell style={createURL(linked)}/>
                </div>
                <h3 className={s.textRights}> &copy; All rights reserved</h3>
            </div>
            </Zoom>
        </div>
    );
};

