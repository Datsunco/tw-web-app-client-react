import './App.css';
import {useEffect} from "react";
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
const tg = window.Telegram.WebApp;

function App() {
    useEffect( () =>{
        tg.ready();
    },[])
  return (
    <div className="App">
        <Button>first</Button>
        <Button>sec</Button>
        <Header></Header>
    </div>
  );
}

export default App;
