import React from 'react';
import s from './Footer.module.css'
import FooterMessengerCell from "./FooterMessengerCell/FooterMessengerCell";
import vk from "../common/img/icons/vk.svg";
import tg from "../common/img/icons/tg.svg";
import wa from "../common/img/icons/wa.svg";
import linked from "../common/img/icons/in.svg";

export const Footer = () => {
    const vkontakt = {
        backgroundImage: `url(${vk})`,
    }
    const telegram = {
        backgroundImage: `url(${tg})`,
    }
    const whatsApp = {
        backgroundImage: `url(${wa})`,
    }
    const linkedIn = {
        backgroundImage: `url(${linked})`,
    }
    return (
        <div className={s.mainBlock}>
            <div className={s.contentBlock}>
                <h3 className={s.myName}>Igor Filin</h3>
                <div className={s.block}>
                    <FooterMessengerCell style={vkontakt}/>
                    <FooterMessengerCell style={telegram} />
                    <FooterMessengerCell style={whatsApp}/>
                    <FooterMessengerCell style={linkedIn}/>
                </div>
                <h3 className={s.textRights}> &copy; All rights reserved</h3>
            </div>
        </div>
    );
};

