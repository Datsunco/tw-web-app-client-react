import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import News from "./components/News/News";
const tg = window.Telegram.WebApp;

function App() {
    useEffect( () =>{
        tg.ready();
    },[])
  return (
    <div className="App">
        <Header/>
        <News/>
    </div>
  );
}

export default App;
