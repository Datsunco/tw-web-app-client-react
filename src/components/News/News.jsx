import React from 'react';
import './News.css'

const News = () => {
    return (
        <div className={'news'}>
            <a className={'news_text'}>Новости проекта</a>
            <div className={'container'}>
                <ul>
                    <li><a>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,
                        vitae feugiat felis. Cras faucibus vulputate augue. Sed.
                        </a>
                    </li>
                    <li><a>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at fringilla est,
                        vitae feugiat felis. Cras faucibus vulputate augue. Sed.
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default News;