import React from 'react';
import s from './Projects.module.scss'
import {Project} from "./Project/Project";
import HeaderTitle from "../common/components/HeaderTitle";
import social from '.././common/img/socialNetwork.jpg'
import todo from  '../common/img/todolist.jpg'
import count from  '../common/img/counter.PNG'
import tictaktoe from '../common/img/tictactoe.jpg'
import card from '../common/img/card.jpg'
import filmDatabase from '../common/img/filmDatabase.jpg'
import weather from '../common/img/weather.jpg'
import {Zoom} from "react-awesome-reveal";

export const Projects = () => {
    const socialNetwork = {
        backgroundImage:`url(${social})`,
    }
    const todolist = {
        backgroundImage:`url(${todo})`,
    }
    const counter = {
        backgroundImage:`url(${count})`,
    }
    const ticTacToe = {
        backgroundImage:`url(${tictaktoe})`,
    }
    const cards = {
        backgroundImage:`url(${card})`,
    }
    const filmsDatabase = {
        backgroundImage:`url(${filmDatabase})`,
    }
    const weatherForecast = {
        backgroundImage:`url(${weather})`,
    }

   const projectAddress = {
       socialNetwork:'https://igorfilin.github.io/samurai-way-main-typescript/',
       todolist:'https://igorfilin.github.io/todolist/',
       counter:'https://igorfilin.github.io/counter/',
       ticTacToe:'https://igorfilin.github.io/tic-tac-toe/',
       cards:'https://samurai-way.github.io/Friday-app/',
       movieDatabase:'https://igorfilin.github.io/movie-database/',
       weather:'https://igorfilin.github.io/weather-forecast/',
   }
    return (
        <div id='projects' className={s.mainBlock}>
            <div className={s.container}>
                <HeaderTitle  title={'Projects'}/>
                <Zoom triggerOnce>
                <div  className={s.projectsContainer} >
                    <Project address={projectAddress.socialNetwork} style={socialNetwork} title={'Social network'} />
                    <Project address={projectAddress.todolist} style={todolist} title={'Todolist'} />
                    <Project address={projectAddress.counter}  style={counter} title={'Counter'} />
                    <Project address={projectAddress.ticTacToe} style={ticTacToe} title={'Tic-tac-toe'} />
                    <Project address={projectAddress.movieDatabase} style={filmsDatabase} title={'Movie database'} />
                    <Project address={projectAddress.cards} style={cards} title={'Card'} />
                    <Project address={projectAddress.weather} style={weatherForecast} title={'Weather forecast'} />
                </div>
                </Zoom>
            </div>
        </div>
    );
};

