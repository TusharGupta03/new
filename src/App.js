import './App.css';
import Home from './components/Home-Page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './components/Sign-up/Signup';
import Error from './components/Error-page/Error';
import Login from './components/Login/Login';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/error' element={<Error />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
