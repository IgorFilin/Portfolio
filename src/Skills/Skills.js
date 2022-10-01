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

export const Skills = () => {

    const arrayIconAdressSkills = [
        {adress:reactSvg,title:'REACT'},
        {adress:reduxSvg,title:'REDUX'},
        {adress:typeScriptSvg,title:'TYPESCRIPT'},
        {adress:javascriptSvg,title:'JAVASCRIPT'},
        {adress:htmlSvg,title:'HTML'},
        {adress:cssSvg,title:'CSS'},
        {adress:apiSvg,title:'REST API'},
        {adress:ajaxSvg,title:'AXIOS'},
        {adress:gitSvg,title:'GITHUB'},
        {adress:sassSvg,title:'SASS/SCSS'},
        {adress:tddSvg,title:'TDD'},
        {adress:storyBookSvg,title:'STORYBOOK'},
        {adress:formikSvg,title:'FORMIK'},
        {adress:materialUISvg,title:'MATERIAL-UI'},
        {adress:antDesignSvg,title:'ANT-DESIGN'},
        {adress:figmaSvg,title:'FIGMA'},
        {adress:webpackSvg,title:'WEBPACK'},
        {adress:nodeSvg,title:'NODE-JS'},
        {adress:unitTestsSvg,title:'UNIT-TESTING'},
        {adress:SnapshotSvg,title:'SNAPSHOT-TESTING'},
    ]

    const arraySkills = arrayIconAdressSkills.map((skillAdressIcon,index) => {
        return <Skill key={index} title={skillAdressIcon.title} style={createURL(skillAdressIcon.adress)}/>
    })

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Skills'}/>
                <div className={s.skillsBlock}>
                    {arraySkills}
                </div>
            </div>
        </div>
    );
};

