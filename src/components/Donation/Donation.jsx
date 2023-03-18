import React, {useState} from 'react';
import './Donation.css'


const Donation = () => {
    const [amount, setAmount] = useState('');

    const onChangeAmount = (e) =>{
        setAmount(e.target.text)
    }


    return (
        <div className={'donation'}>
            <text>Вы покупаете</text>
            <div className={'input_block'}>
                <input
                    id={'amount'}
                    className={'input'}
                    type="text"
                    placeholder={'0'}
                    value={amount}
                    onChange={onChangeAmount}
                />
                <text>TWT</text>
            </div>
            <text>1 TWT ≈ 1 rub</text>
        </div>
    );
};

export default Donation;