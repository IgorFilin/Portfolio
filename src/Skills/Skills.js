import React from 'react';
import s from './Skills.module.scss'
import {Skill} from "./Skill/Skill";
import HeaderTitle from "../common/components/HeaderTitle";
import reactSvg from './../common/img/icons/react.svg'
import reduxSvg from './../common/img/icons/redux.svg'
import typeScriptSvg from './../common/img/icons/typeScript.svg'
import htmlSvg from './../common/img/icons/html.svg'
import cssSvg from './../common/img/icons/css.svg'
import apiSvg from './../common/img/icons/api.svg'
import ajaxSvg from './../common/img/icons/ajax.svg'
import gitSvg from './../common/img/icons/git.svg'
import sassSvg from './../common/img/icons/sass.svg'
import tddSvg from './../common/img/icons/tdd.svg'
import storyBookSvg from './../common/img/icons/storyBook.svg'
import formikSvg from './../common/img/icons/formik.svg'
import materialUISvg from './../common/img/icons/materialUI.svg'
import antDesignSvg from './../common/img/icons/antDesign.svg'
import figmaSvg from './../common/img/icons/figma.svg'
import webpackSvg from './../common/img/icons/webpack.svg'
import nodeSvg from './../common/img/icons/node.svg'
import unitTestsSvg from './../common/img/icons/unitTests.svg'
import javascriptSvg from './../common/img/icons/javascript.svg'
import SnapshotSvg from './../common/img/icons/snapshot.svg'
import {createURL} from "../common/utils/functionsUtils";
import {AttentionSeeker} from "react-awesome-reveal";

export const Skills = () => {

    const arrayIconAdressSkills = [
        {address: reactSvg, title: 'REACT'},
        {address: reduxSvg, title: 'REDUX'},
        {address: typeScriptSvg, title: 'TYPESCRIPT'},
        {address: javascriptSvg, title: 'JAVASCRIPT'},
        {address: htmlSvg, title: 'HTML'},
        {address: cssSvg, title: 'CSS'},
        {address: apiSvg, title: 'REST API'},
        {address: ajaxSvg, title: 'AXIOS'},
        {address: gitSvg, title: 'GITHUB'},
        {address: sassSvg, title: 'SASS/SCSS'},
        {address: tddSvg, title: 'TDD'},
        {address: storyBookSvg, title: 'STORYBOOK'},
        {address: formikSvg, title: 'FORMIK'},
        {address: materialUISvg, title: 'MATERIAL-UI'},
        {address: antDesignSvg, title: 'ANT-DESIGN'},
        {address: figmaSvg, title: 'FIGMA'},
        {address: webpackSvg, title: 'WEBPACK'},
        {address: nodeSvg, title: 'NODE-JS'},
        {address: unitTestsSvg, title: 'UNIT-TESTING'},
        {address: SnapshotSvg, title: 'SNAPSHOT-TESTING'},
    ]

    const arraySkills = arrayIconAdressSkills.map((skillAdressIcon, index) => {
        return <Skill key={index} title={skillAdressIcon.title} style={createURL(skillAdressIcon.address)}/>
    })

    return (

            <div id='skills' className={s.mainBlock}>
                <div className={s.container}>
                    <HeaderTitle title={'Skills'}/>
                    <AttentionSeeker effect={'headShake'}>
                        <div className={s.skillsBlock}>
                            {arraySkills}
                        </div>
                    </AttentionSeeker>
                </div>
            </div>

    );
};

