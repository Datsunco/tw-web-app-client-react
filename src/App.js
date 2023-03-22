import './App.css';
import {useEffect} from "react";
import Main from "./components/Main/Main";
import Donation from "./components/Donation/Donation";
import Services from "./components/Services/Services";
import {Route, Routes} from 'react-router-dom'
import Map from "./components/Map/Map";

const tg = window.Telegram.WebApp;

function App() {
    useEffect( () =>{
        tg.ready();
    },[])

  return (
    <div className="App">
        <Routes>
            <Route index element={<Main/>}/>
            <Route path='/donation' element={<Donation/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/space_photo' element={<Map/>}/>
        </Routes>

    </div>
  );
}

export default App;
