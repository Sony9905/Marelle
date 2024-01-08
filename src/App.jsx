import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import MonthlyQuizzes from './MonthlyQuiz';
import MemorableMoments from './TenMemorableMoments';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path ="/Marelle" element={<Home/>} />
        <Route path ="/Home" element={<Home/>} />
        <Route path ="/Marelle/Home" element={<Home/>} />
        <Route path="/Monthly-Quiz" element={<MonthlyQuizzes/>} />
        <Route path="/Marelle/Monthly-Quiz" element={<MonthlyQuizzes/>} />
        <Route path="/Memorable-Moments" element={<MemorableMoments/>} />
        <Route path="/Marelle/Memorable-Moments" element={<MemorableMoments/>} />
      </Routes>
    </div>
  );
}

export default App;