import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Profile from './routes/profile/profile.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:userId" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
