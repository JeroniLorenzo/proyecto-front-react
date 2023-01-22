import React from 'react';
import './InputText.css';

export const InputText = ({type, name, placeholder, functionHandler}) => {

    return (
        <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            onChange={(e)=>functionHandler(e)} 
            className='inputDesign' 
        />
    )
}