import React from 'react'
import PreloaderContainer from './components/Preloader/PreloaderContainer';
import { Body } from './components/Body/Body';
import ModalOrderBoxContainer from './components/ModalBox/ModalOrderBoxContainer';
import ModalThxBoxContainer from './components/ModalBox/ModalThxBoxContainer';
import './App.css';

const App = () => {
  return (
    <>
      <PreloaderContainer/>
      <Body/>
      <ModalOrderBoxContainer/>
      <ModalThxBoxContainer/>
    </>
  );
}

export default App;
