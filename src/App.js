import './App.css';
import Loader from './components/Loader/Loader';
import MainText from './components/MainText/MainText';
import Navbar from './components/Navbar/Navbar';
import Points from './components/Social-points/Points';
import { useState } from "react";


function App() {
  const [loader, set_loader] = useState(false);
  setTimeout(function () {
    set_loader(true);
    console.log(loader)
  }, 6000)

  const [loader2, set_loader2] = useState(true);
  setTimeout(function () {
    set_loader2(false);
    document.getElementsByTagName('body')[0].style.overflow = "auto";
    console.log(loader2)
  }, 7300)

  return (
    <>
      {loader ? <div>
        <Points /> <Navbar /><MainText />
      </div> : null}

      {loader2 ? <Loader /> : null}

    </>
  );
}

export default App;
