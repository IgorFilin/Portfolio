import React from 'react';
import s from './Navbar.module.scss'
import {Link} from 'react-scroll'

export const Navbar = () => {

    return (
        <div className={s.navbar}>
            <Link activeClass={s.active} to="main" spy={true} smooth={true} offset={-71}  duration={1000}>MAIN</Link>
            <Link activeClass={s.active} to="skills" spy={true} smooth={true} offset={-71} duration={1000}>SKILLS</Link>
            <Link activeClass={s.active} to="projects" spy={true} smooth={true} offset={-71}
                  duration={1000}>PROJECTS</Link>
            <Link activeClass={s.active} to="contacts" spy={true} smooth={true} offset={-71}
                  duration={1000}>CONTACTS</Link>
        </div>
    );
};


