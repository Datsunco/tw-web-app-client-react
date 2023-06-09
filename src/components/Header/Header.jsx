import React, {useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import Button from "../Button/Button";
import './Header.css'

const tg = window.Telegram.WebApp;

const Header = () => {
    const navigate = useNavigate();

    const onClickDonation =useCallback( () => {
        navigate('/donation');
        tg.expand();
        tg.BackButton.show();
        tg.MainButton.show();
        tg.MainButton.disable();
        tg.MainButton.color = "##364b59";

    },[navigate])

    const onClickServices = useCallback( () =>{
        navigate('/services');
        tg.BackButton.show();

        tg.expand();
        tg.setBackgroundColor('secondary_bg_color')
    },[navigate])

    const onClickBackDonation = useCallback( () => {
        navigate('');
        tg.BackButton.hide();
        tg.MainButton.hide();
        tg.setBackgroundColor('bg_color')
        },[navigate])



    useEffect(()=>{
        tg.onEvent('backButtonClicked', onClickBackDonation)
        return () => {
        }
    },[onClickBackDonation])

    /*useEffect(() => {
            tg.MainButton.setParams({
                text: 'Перейти к оплате',
                color: '#364b59',
            })
    },[])*/

    //useEffect(() => {
    //    tg.MainButton.setParams({
    //        text: 'Перейти к оплате',
    //        //color: 'var(--tg-theme-hint-color)',
    //    })
    //},[])


    return (
        <div className={'header'}>
            <text className={'token_balance_text'}>Баланс TW Token</text>
            <div className={'token_amount_block'}>
                <img alt={''} className={'logo'}
                     src={"https://sun9-33.userapi.com/impg/vzl0gqhFCJzKASoEXdFU0OY9sOW1vbhqYYk54A/GsgGVTmrDCk.jpg?size=287x302&quality=96&sign=a8cbf5305b9ed3ee2c279a9472f86ade&type=album"}/>
                <text className={'token_amount'}>2342.01232</text>
            </div>
            <div className={'buttons_block'}>
                <Button>Главная</Button>
                <Button onClick={onClickServices} >Сервисы</Button>
                <Button onClick={onClickDonation}>Донат</Button>
                <Button>Настройки</Button>
            </div>
        </div>


    );
};

export default Header;