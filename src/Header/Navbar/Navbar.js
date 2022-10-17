import React from 'react';
import s from './Navbar.module.scss'
import {Link} from 'react-scroll'

export const Navbar = () => {

    return (
        <div className={s.navbar}>
            <Link offset={-65} spy={true} to='main' activeClass={s.active}>MAIN</Link>

            <Link offset={-65} spy={true} to='skills' activeClass={s.active}>SKILLS</Link>

            <Link offset={-65} spy={true} to='projects' activeClass={s.active}> PROJECTS</Link>

            <Link offset={-65} spy={true} to='contacts' activeClass={s.active}> CONTACTS</Link>

        </div>
    );
};


