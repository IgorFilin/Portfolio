import React from 'react';
import s from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import HeaderTitle from "../common/HeaderTitle";
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

export const Skills = () => {

    const react = {
        backgroundImage:`url(${reactSvg})`,
    }
    const redux = {
        backgroundImage:`url(${reduxSvg})`,
    }
    const typeScript = {
        backgroundImage:`url(${typeScriptSvg})`,
    }
    const html = {
        backgroundImage:`url(${htmlSvg})`,
    }
    const css = {
        backgroundImage:`url(${cssSvg})`,
    }
    const api = {
        backgroundImage:`url(${apiSvg})`,
    }
    const ajax = {
        backgroundImage:`url(${ajaxSvg})`,
    }
    const git = {
        backgroundImage:`url(${gitSvg})`,
    }
    const sass = {
        backgroundImage:`url(${sassSvg})`,
    }
    const tdd = {
        backgroundImage:`url(${tddSvg})`,
    }
    const storyBook = {
        backgroundImage:`url(${storyBookSvg})`,
    }
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Skills'}/>
                <div className={s.skillsBlock}>
                    <Skill style={react} title={'REACT'} discription={'discription skill'}/>
                    <Skill style={redux} title={'REDUX'} discription={'discription skill'}/>
                    <Skill style={typeScript} title={'TYPESCRIPT'}discription={'discription skill'}/>
                    <Skill style={html} title={'HTML'}discription={'discription skill'}/>
                    <Skill style={css} title={'CSS'}discription={'discription skill'}/>
                    <Skill style={api} title={'REST API'}discription={'discription skill'}/>
                    <Skill style={ajax} title={'AXIOS'}discription={'discription skill'}/>
                    <Skill style={git} title={'GITHUB'}discription={'discription skill'}/>
                    <Skill style={sass} title={'SASS/SCSS'}discription={'discription skill'}/>
                    <Skill style={tdd} title={'TDD'}discription={'discription skill'}/>
                    <Skill style={storyBook} title={'STORYBOOK'}discription={'discription skill'}/>
                    <Skill title={'FORMIK'}discription={'discription skill'}/>
                    <Skill title={'MATERIAL-UI'}discription={'discription skill'}/>
                    <Skill title={'ANT-DESIGN'}discription={'discription skill'}/>
                    <Skill title={'FIGMA'}discription={'discription skill'}/>
                    <Skill title={'WEBPACK'}discription={'discription skill'}/>
                    <Skill title={'NODE-JS'}discription={'discription skill'}/>
                    <Skill title={'UNIT-TESTING'}discription={'discription skill'}/>
                    <Skill title={'JAVASCRIPT'}discription={'discription skill'}/>
                </div>
            </div>
        </div>
    );
};

