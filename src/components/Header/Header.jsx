import React from 'react';
import Button from "../Button/Button";
import './Header.css'

const Header = () => {
    return (
        <div className={'header'}>
            <Button>Profile</Button>
            <Button>Services</Button>

        </div>
    );
};

export default Header;