import React from 'react';
import Button from "../Button/Button";
import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <text className={'token_balance_text'} >Баланс Measure</text>
            <div className={'token_amount_block'}>
                <img alt={''} className={'logo'} src={"https://sun9-33.userapi.com/impg/vzl0gqhFCJzKASoEXdFU0OY9sOW1vbhqYYk54A/GsgGVTmrDCk.jpg?size=287x302&quality=96&sign=a8cbf5305b9ed3ee2c279a9472f86ade&type=album"}/>
                <text className={'token_amount'} >2342.01232</text>
            </div>
            <div className={'buttons_block'}>
                <Button>Главная</Button>
                <Button>Сервисы</Button>
                <Button>Донат</Button>
                <Button>Настройки</Button>
            </div>
        </div>


    );
};

export default Header;