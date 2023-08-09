import './App.css';
import Home from './components/Home-Page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './components/Sign-up/Signup';
import Login from './components/Login/Login';
import Extra from './components/Extra/Extra';
import { useState } from 'react';
import Dashboard from './components/Sidebar/Dashboard';
import Matches from './components/Sidebar/Matches';
import Premium from './components/Sidebar/Premium';
import Profile from './components/Sidebar/Profile';
import Chat from './components/Sidebar/Chat';
import Slidebar from './components/Sidebar/Sidebar';

function App() {
  const [loggedin, setloggedin] = useState(false)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home loggedin={loggedin} setloggedin={setloggedin} />} />
          <Route path='/signup' element={<Signup loggedin={loggedin} setloggedin={setloggedin} />} />
          <Route path='/login' element={<Login loggedin={loggedin} setloggedin={setloggedin} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/matches' element={<Matches />} />
          <Route path='/matches' element={<Matches />} />
          <Route path='/slide' element={<Slidebar />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/extra' element={<Extra loggedin={loggedin} setloggedin={setloggedin} />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
