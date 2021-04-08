import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ add }) => {

    const [ inputValue, setInputValue] = useState('');
    const handleChange = (ev) => {
        setInputValue(ev.target.value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if ( inputValue.trim().length > 2 ) {
            add(inputValue);
            setInputValue('');
        }
        
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input 
            type="text"
            value={ inputValue }
            placeholder='Nombre de serie'
            onChange={ handleChange }/>
        </form>
    )
}
AddCategory.propTypes = {
    add: PropTypes.func.isRequired
}
