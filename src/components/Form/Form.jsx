import React, {useEffect, useState} from 'react';
import { useRef } from "react";
import './Form.css'

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "14ff958eb194fcb4809c2f0661a7c8a2549d4cd1";
const tg = window.Telegram.WebApp;


const Form = ({onSelect}) => {
    const inputRef = useRef(null);

    //document.querySelector("#address").addEventListener("change", onChangeCity);
    const [address, setAddress] = useState('');
    //const [coordinates, setCoordinates] = useState('');
    const [articles, setArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(true);


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
        tg.MainButton.hide();
    },[])



    const onChangeCity = (e, index) => {
        var address_text = '';
        //if Проверка на вызов функции из HTMl или из функции onClickAutoCompleteItem
        if (index === 1) {
            address_text = e.target.textContent;
        }
        else {
            address_text = e.target.value
        }
        //end if
        setAddress(address_text);

        const promise = suggest(address_text);
        promise
            .then(function(response) {
                return response.json();
            })
            .then(function(suggestions) {
                setArticles(suggestions['suggestions']);
                console.log(suggestions['suggestions']);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    function suggest(query) {
        var params = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }

        return fetch(url, params);
    }

    //const onChangeCoordinates = (e) => {
    //    setCoordinates(e.target.value);
    //}


    const onClickAutoCompleteItem = (e,article) =>{
        setAddress(e.target.textContent);
        console.log(1);
        const center = {
            lat: parseFloat(article['geo_lat']),
            lng: parseFloat(article['geo_lon'])
        }
        onSelect(center);
        setIsOpen(!isOpen);
        onChangeCity(e, 1);
        tg.MainButton.show()
    }

    const onClickInput = () =>{
        setIsOpen(true);
        inputRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
          });
    }

    const onClickForm = () =>{
    }

    return (
        <div className={'form'} onClick={onClickForm} щтСДшсл>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
            <h3>Введите ваши данные</h3>

            <input 
                id={'address'}
                className={'input'}
                type="text"
                placeholder={'Адрес'}
                value={address}
                onClick={onClickInput}
                onChange={(e) => onChangeCity(e,0)}
            />
            <ul className={"autoComplete"}>
                {  isOpen
                   ? Object.keys(articles).map(article => {
                    return(
                        <li className={"autoCompleteItem"}
                            onClick={(e) => onClickAutoCompleteItem(e,articles[article]['data'])}>
                            {articles[article]['value']}
                        </li>
                        );
                    })
                    :null
                }
            </ul>

        </div>
    );
};

export default Form;