import React from 'react';
import s from './Footer.module.scss'
import FooterMessengerCell from "./FooterMessengerCell/FooterMessengerCell";
import vk from "../common/img/icons/vk.svg";
import tg from "../common/img/icons/tg.svg";
import wa from "../common/img/icons/wa.svg";
import linked from "../common/img/icons/in.svg";
import {createURL} from "../common/utils/functionsUtils";
import Zoom from 'react-reveal/Zoom';

export const Footer = () => {

    const addressMessenger = {
        vk:'https://vk.com/filin2027',
        tg:'https://t.me/IgorFilin71',
        wa:'https://wa.me/79605942558',
        in:'https://www.linkedin.com/in/игорь-филин-703a6924b/'
    }

    return (
        <div className={s.mainBlock}>
            <Zoom bottom>
            <div className={s.contentBlock}>
                <h3 className={s.myName}>Igor Filin</h3>
                <div className={s.block}>
                    <FooterMessengerCell addressMessenger={addressMessenger.vk} style={createURL(vk)}/>
                    <FooterMessengerCell addressMessenger={addressMessenger.tg} style={createURL(tg)} />
                    <FooterMessengerCell addressMessenger={addressMessenger.wa} style={createURL(wa)}/>
                    <FooterMessengerCell addressMessenger={addressMessenger.in} style={createURL(linked)}/>
                </div>
                <h3 className={s.textRights}> &copy; All rights reserved</h3>
            </div>
            </Zoom>
        </div>
    );
};

