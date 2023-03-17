import React from 'react';
import './News.css'

const News = () => {
    return (
        <div className={'news'}>
            <text className={'news_block_text'}>Новости проекта</text>
            <div className={'container'}>
                <ul>
                    <li className={'new'}>
                        <text className={'news_text'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,

                        </text>
                        <text> Вчера в 18:45</text>
                    </li>
                    <li className={'new'}>
                        <text className={'news_text'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,



                        </text>
                        <text> Позавчера в 15:20</text>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;