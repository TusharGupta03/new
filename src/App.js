import './App.css';
import Home from './components/Home-Page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './components/Sign-up/Signup';
import Login from './components/Login/Login';
import Profile from './components/Profile-page/Profile';
import Extra from './components/Extra/Extra';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/extra' element={<Extra />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
