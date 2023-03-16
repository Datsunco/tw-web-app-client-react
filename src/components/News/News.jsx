import React from 'react';
import './News.css'

const News = () => {
    return (
        <div className={'news'}>
            <text className={'news_text'}>Новости проекта</text>
            <div className={'container'}>
                <ul>
                    <li><text >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,
                        vitae feugiat felis. Cras faucibus vulputate augue. Sed.
                        </text>
                    </li>
                    <li><text href={'#'}>
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