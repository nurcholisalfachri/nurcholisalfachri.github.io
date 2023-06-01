import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import DetailContent from './Page/DetailContent/DetailContent';


const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-content/:contentId" element={<DetailContent />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
