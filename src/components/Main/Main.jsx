import React from 'react';
import './Main.css'
import Header from "../Header/Header";
import News from "../News/News";

const Main = () => {
    return (
        <div className={'main'}>
            <Header/>
            <News/>
        </div>
    );
};

export default Main;