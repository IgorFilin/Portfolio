import React from 'react';
import s from './Navbar.module.scss'

export const Navbar = () => {
  return (
      <div className={s.navbar}>
          <a href="">HOME</a>
          <a href="">SKILLS</a>
          <a href="">PROJECTS</a>
          <a href="">CONTACTS</a>
      </div>
  );
};


