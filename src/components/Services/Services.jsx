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
                <button onClick={onFirButClick} className={'test_button'}/>
                <button className={'test1_button'}/>
                <button className={'test2_button'}/>

            </div>
        </div>
    );
};

export default Services;