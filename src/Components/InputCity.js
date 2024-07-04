import React from 'react';
import { useState } from 'react'; 

export default function InputCity({ onSubmitHandler }) {
    const [cityName, setCityName] = useState('Seattle');

    function onInputHandler(e) {
        e.preventDefault();
        setCityName(e.target.value);
    }
    return (
        <div className='input'>
        <label>City</label>
        <input type='text' value={cityName} onChange={onInputHandler}/>
        <br />
        <button type='submit' className='input_btn' onClick={()=> {onSubmitHandler(cityName)}}>Search</button>
        </div>
    )
}