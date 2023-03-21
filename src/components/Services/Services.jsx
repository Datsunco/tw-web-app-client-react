import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className={'services'}>
            <input className={'search_services'}/>
            <div className={'quick_button_block'}>
                <button className={'photo_button'}/>
                <button className={'test1_button'}/>
                <button className={'test2_button'}/>

            </div>
        </div>
    );
};

export default Services;