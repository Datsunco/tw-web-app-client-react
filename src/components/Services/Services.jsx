import React from 'react';
import './Services.css'


const tg = window.Telegram.WebApp;

const Services = () => {

    const onFirButClick = () => {
        tg.showPopup({
            'title': 'Перейти к оплате',
            'message': 'lol',
        });
    }

    return (
        <div className={'services'}>
            <input placeholder={'Фото'}
                   type="text"
                   id={'amount'}
                   className={'search_services'}/>

            <div className={'quick_button_block'}>

                <button onClick={onFirButClick} className={'test_button'}>
                    <img alt={''}  className={'img'}
                         //src={'https://img-new.cgtrader.com/items/122381/dbaa861cce/photorealistic-earth-and-cloudsat-satellite-3d-model-animated-obj-fbx-c4d-dae.jpg'}
                    />
                    <text className={'text_button'}>ФОТО ИЗ КОСМОСА</text>
                </button>

                <button className={'test1_button'}>Скоро</button>
                <button className={'test2_button'}>Скоро</button>

            </div>
        </div>
    );
};

export default Services;