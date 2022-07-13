import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './Componentes/Navegacion/Header';
import Inicio from './Componentes/Paginas/Inicio';
import Mnota from './Componentes/Paginas/Mnota';
import Fnota from './Componentes/Paginas/Fnota';
import Mcita from './Componentes/Paginas/Mcita';
import Fcita from './Componentes/Paginas/Fcita';
import Fevento from './Componentes/Paginas/Fevento';
import Mevento from './Componentes/Paginas/Mevento';
import Mrecordatorio from './Componentes/Paginas/Mrecordatorio';
import Frecordatorio from './Componentes/Paginas/Frecordatorio';


function App() {
  return (
    <div className="App">
       <Router>
       <Header />
      <Routes>

            <Route path='/' element={<Inicio/>}/>
            <Route path='/mnota' element={<Mnota/>}/>
            <Route path='/fnota' element={<Fnota/>}/>
            <Route path='/mcita' element={<Mcita/>}/>
            <Route path='/fcita' element={<Fcita/>}/>
            <Route path='/mevento' element={<Mevento/>}/>
            <Route path='/fevento' element={<Fevento/>}/>
            <Route path='/mrecordatorio' element={<Mrecordatorio/>}/>
            <Route path='/frecordatorio' element={<Frecordatorio/>}/>
    </Routes>
      </Router>
</div>
);
}


export default App;
