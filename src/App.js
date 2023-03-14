import './App.css';
import {useEffect} from "react";
import Button from "./components/Button/Button";
const tg = window.Telegram.WebApp;

function App() {
    useEffect( () =>{
        tg.ready();
    },[])
  return (
    <div className="App">
        <Button>first</Button>
        <Button>sec</Button>
    </div>
  );
}

export default App;
