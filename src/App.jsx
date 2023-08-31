import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'


export default function App(){
  return (
    <>
        <NavBar />
        <Routes>
        <Route path="/" element={<Pages.Home />} />

        <Route path="/about" element={<Pages.About />}></Route>

        <Route path="/contact" element={<Pages.Contact />}></Route>

        <Route path="*" element={<Pages.NotFound /> }></Route>
      </Routes>
    </>
  );
};




