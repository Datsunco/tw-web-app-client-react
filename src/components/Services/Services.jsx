import React,{useCallback}  from 'react';
import './Services.css'
import {useNavigate} from "react-router-dom";


const tg = window.Telegram.WebApp;

const Services = () => {
    const navigate = useNavigate();

    const onFirButClick = useCallback(() => {
        navigate('/space_photo');
        tg.expand();
        console.log(1);
        tg.MainButton.show();
    },[navigate])

    return (
        <div className={'services'}>
            <input placeholder={'Фото'}
                   type="text"
                   id={'amount'}
                   className={'search_services'}/>

            <div className={'quick_button_block'}>

                <button onClick={onFirButClick} className={'test_button'}>
                    <text className={'text_button'}>ФОТО ИЗ КОСМОСА</text>
                </button>

                <button className={'test1_button'}>Скоро</button>

                    <button className={'test2_button'}>
                        <text className={'text2_button'}>Скоро</text>
                    </button>


            </div>
        </div>
    );
};

export default Services;