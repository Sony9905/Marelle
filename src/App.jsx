import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Marelle_Timeline from './Components/Marelle_Timeline';
import MonthlyQuizzes from './Components/MonthlyQuiz';
import MemorableMoments from './Components/TenMemorableMoments';
import Navbar from './Components/Navbar';
import { MonthlyPuzzle } from './Components/MonthlyPuzzle';
// import Valentine from './Components/Valentine';
import Contract from './Components/Contract';
import Home from './Components/Home/Home';
import MemoryGame from './Components/MemoryGame';


const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Marelle" exact element={<Home/>} />
        <Route path="/Marelle/Home" exact element={<Home/>} />
        <Route path="/Marelle_Timeline" exact element={<Marelle_Timeline />} />
        <Route path="/Timeline" exact element={<Marelle_Timeline />} />
        <Route path="/Contract" exact element={<Contract />} />
        {/* <Route path="/Valentine's Day Special" exact element={<Valentine />} /> */}
        <Route path="/Marelle-Timeline" exact element={<Marelle_Timeline />} />
        <Route path="/Marelle/Marelle_Timeline" exact element={<Marelle_Timeline />} />
        <Route path="/Marelle/Marelle-Timeline" exact element={<Marelle_Timeline />} />
        <Route path="/Monthly-Quiz" exact element={<MonthlyQuizzes />} />
        <Route path="/Marelle/Monthly-Quiz" exact element={<MonthlyQuizzes />} />
        <Route path="/Memorable-Moments" exact element={<MemorableMoments />} />
        <Route path="/Marelle/Memorable-Moments" exact element={<MemorableMoments />} />
        <Route path="/Marelle/Monthly-Puzzle" exact element={<MonthlyPuzzle />} />
        {/* <Route path="/Marelle/Valentine's Day Special" exact element={<Valentine />} /> */}
        <Route path="/MemoryGame" exact element={<MemoryGame />} />
        <Route path="/Marelle/MemoryGame" exact element={<MemoryGame />} />
        <Route path="/Marelle/Contract" exact element={<Contract />} />
      </Routes>
    </div>
  );
};

export default App;
