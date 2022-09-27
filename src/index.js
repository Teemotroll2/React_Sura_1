import React from 'react';
import ReactDOM from 'react-dom/client';
import {Rico} from './Componente/Rico.js';
import {Menu} from "./Menu/Menu.js";
import {Banner} from './Banner/Banner.js';
import {Sinopsis} from './Sinopsis/Sinopsis.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Menu/>
    <Rico/>
    <Banner/>
    <Sinopsis/>
  </React.StrictMode>
);
