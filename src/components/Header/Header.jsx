import React from 'react';
import Button from "../Button/Button";
import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <text>0.ooo</text>
            <div className={'buttons_block'}>
                <Button>Профиль</Button>
                <Button>Сервисы</Button>
                <Button>Донат</Button>
                <Button>Настройки</Button>
            </div>
        </div>
    );
};

export default Header;