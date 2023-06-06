import './App.css';
import Home from './components/Home-Page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './components/Sign-up/Signup';



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
