import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

 function Rotas() {
  return (
    <BrowserRouter> 
     <Routes>
         <Route path="/"  Component={Landing} />
         <Route path="/app"  Component={OrphanagesMap} />

     </Routes>
       
    </BrowserRouter>
  );
}
export default Rotas;