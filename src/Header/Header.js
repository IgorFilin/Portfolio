import React from 'react';
import s from './Header.module.css'
import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
  return (
      <div className={s.header}>
      <Navbar/>
      </div>
  );
};


