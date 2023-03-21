import React, {useState} from 'react';
import './Donation.css'


const Donation = () => {
    const [amount, setAmount] = useState('');

    const onChangeAmount = (e) =>{
        setAmount(e.target.text)
    }


    return (
        <div className={'donation'}>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
            <text className={'donation_text'}>Вы покупаете</text>
            <div className={'input_block'}>
                <input
                    id={'amount'}

                    className={'input'}
                    type="text"
                    placeholder={'0'}
                    value={amount}
                    onChange={onChangeAmount}
                />
                <text className={'currency_cut'}>TWT</text>
            </div>
            <text className={'currency_text'}>1 TWT ≈ 1 rub</text>
        </div>
    );
};

export default Donation;