import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bags from './component/Bags';
import Travel from './component/Travel';
import Accesories from './component/Accesories';
import Gifting from './component/Gifting';
import Jewelery from './component/Jewelery';

function App() {
  return (
      <div style={{ padding: '18px', backgroundColor: 'black'}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Bags />} /> 
            <Route exact path="/travel" element={<Travel />} /> 
            <Route exact path="/accesories" element={<Accesories />} /> 
            <Route exact path="/gifting" element={<Gifting />} /> 
            <Route exact path="/jewelery" element={<Jewelery />} /> 
          </Routes>
        </BrowserRouter>
      </div>
  );
}
export default App;
