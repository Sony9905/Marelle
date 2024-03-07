import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MonthlyQuizzes from './Components/MonthlyQuiz';
import MemorableMoments from './Components/TenMemorableMoments';
import Navbar from './Components/Navbar';
import { MonthlyPuzzle } from './Components/MonthlyPuzzle';
// import Valentine from './Components/Valentine';
import Contract from './Components/Contract';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path ="/Marelle" exact element={<Home/>} />
        <Route path ="/Home" exact element={<Home/>} />
        <Route path ="/Timeline" exact element={<Home/>} />
        <Route path ="/Contract" exact element={<Contract/>} />
        {/* <Route path ="/Valentine's Day Special" exact element={<Valentine/>} /> */}
        <Route path ="/Marelle-Timeline" exact element={<Home/>} />
        <Route path ="/Marelle/Home" exact element={<Home/>} />
        <Route path ="/Marelle/Marelle-Timeline" exact element={<Home/>} />
        <Route path="/Monthly-Quiz" exact element={<MonthlyQuizzes/>} />
        <Route path="/Marelle/Monthly-Quiz" exact element={<MonthlyQuizzes/>} />
        <Route path="/Memorable-Moments" exact element={<MemorableMoments/>} />
        <Route path="/Marelle/Memorable-Moments" exact element={<MemorableMoments/>} />
        <Route path="/Marelle/Monthly-Puzzle" exact element={<MonthlyPuzzle/>} />
        {/* <Route path="/Marelle/Valentine's Day Special" exact element={<Valentine/>} /> */}
        <Route path="/Marelle/Contract" exact element={<Contract/>} />
      </Routes>
    </div>
  );
}

export default App;

