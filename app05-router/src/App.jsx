import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Header} from './components';
import MainRoute from './components/MainRoute';
import MuiHeader from './components/MuiHeader';

function App() {



  return (
    <div>
      {/* <Header /> */}
      <MuiHeader />


    <MainRoute/>

    </div>
  );
}

export default App