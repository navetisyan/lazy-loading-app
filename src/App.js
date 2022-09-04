import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';
import DataContext from './dataContext';

function App() {
  const [data, setData] = useState(null);

  const value = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={value}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:userId" element={<Profile />}></Route>
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
