import React, { useState } from 'react';
import './App.css'
import { AlbumList, ArtistInfo, EmailForm, NavBar } from './components'

export default function App(){
  return (
    <>
    <div class = "page_top">
        <NavBar />
    <header>Welcome to the Hozier Fan Club!</header>
    </div>
    <div>
      <ArtistInfo />
      <AlbumList />
      <EmailForm />
    </div>
    <footer>©Hozier Fan Club 2023</footer>
    </>
  );
};




