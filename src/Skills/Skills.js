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
import formikSvg from './../common/img/icons/formik.svg'
import materialUISvg from './../common/img/icons/materialUI.svg'
import antDesignSvg from './../common/img/icons/antDesign.svg'
import figmaSvg from './../common/img/icons/figma.svg'
import webpackSvg from './../common/img/icons/webpack.svg'
import nodeSvg from './../common/img/icons/node.svg'
import unitTestsSvg from './../common/img/icons/unitTests.svg'
import javascriptSvg from './../common/img/icons/javascript.svg'
import SnapshotSvg from './../common/img/icons/snapshot.svg'

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
    const formik = {
        backgroundImage:`url(${formikSvg})`,
    }
    const materialUI = {
        backgroundImage:`url(${materialUISvg})`,
    }
    const antDesign = {
        backgroundImage:`url(${antDesignSvg})`,
    }
    const figma = {
        backgroundImage:`url(${figmaSvg})`,
    }
    const webpack = {
        backgroundImage:`url(${webpackSvg})`,
    }
    const node = {
        backgroundImage:`url(${nodeSvg})`,
    }
    const unitTests = {
        backgroundImage:`url(${unitTestsSvg})`,
    }
    const javascript = {
        backgroundImage:`url(${javascriptSvg})`,
    }
    const SnapshotTests = {
        backgroundImage:`url(${SnapshotSvg})`,
    }

    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle title={'Skills'}/>
                <div className={s.skillsBlock}>
                    <Skill style={react} title={'REACT'} />
                    <Skill style={redux} title={'REDUX'} />
                    <Skill style={typeScript} title={'TYPESCRIPT'}/>
                    <Skill style={javascript} title={'JAVASCRIPT'}/>
                    <Skill style={html} title={'HTML'}/>
                    <Skill style={css} title={'CSS'}/>
                    <Skill style={api} title={'REST API'}/>
                    <Skill style={ajax} title={'AXIOS'}/>
                    <Skill style={git} title={'GITHUB'}/>
                    <Skill style={sass} title={'SASS/SCSS'}/>
                    <Skill style={tdd} title={'TDD'}/>
                    <Skill style={storyBook} title={'STORYBOOK'}/>
                    <Skill style={formik} title={'FORMIK'}/>
                    <Skill style={materialUI} title={'MATERIAL-UI'}/>
                    <Skill style={antDesign} title={'ANT-DESIGN'}/>
                    <Skill style={figma} title={'FIGMA'}/>
                    <Skill style={webpack} title={'WEBPACK'}/>
                    <Skill style={node}  title={'NODE-JS'}/>
                    <Skill  style={unitTests} title={'UNIT-TESTING'}/>
                    <Skill  style={SnapshotTests} title={'SNAPSHOT-TESTING'}/>
                </div>
            </div>
        </div>
    );
};

