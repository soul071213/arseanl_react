import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Teams from './pages/Teams';
import History from './pages/History';
import MatchPage from './pages/MatchPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" exact element={<Home></Home>} />
      <Route path="/teams" element={<Teams></Teams>} />
      <Route path="/history" element={<History></History>} />
      <Route path="/match" element={<MatchPage></MatchPage>} />

      </Routes>

    </div>
  );
}

export default App;
