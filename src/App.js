import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
//import News from "./components/News/News";
import Donation from "./components/Donation/Donation";
import {Route, Routes} from 'react-router-dom'

const tg = window.Telegram.WebApp;

function App() {
    useEffect( () =>{
        tg.ready();
    },[])

  return (
    <div className="App">
        <Routes>
            <Route index element={<Header/>}/>
            <Route path='/donation' element={<Donation/>}/>
        </Routes>

    </div>
  );
}

export default App;
