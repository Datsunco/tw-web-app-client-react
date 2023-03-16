import React from 'react';
import './News.css'

const News = () => {
    return (
        <div className={'news'}>
            <text className={'news_block_text'}>Новости проекта</text>
            <div className={'container'}>
                <ul>
                    <li><text className={'news_text'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,
                        vitae feugiat felis. Cras faucibus vulputate augue. Sed.
                        </text>
                        <text> Вчера в 18:45</text>
                    </li>
                    <li><text className={'news_text'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,
                        vitae feugiat felis. Cras faucibus vulputate augue. Sed.
                    </text>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;