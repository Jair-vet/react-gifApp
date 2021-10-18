import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length >2 ){  // trim() => Borramos los espacios, en blanco que pueda tener
            setCategories( cats => [ inputValue, ...cats ]);
            setInputValue('');
        }

        // console.log('Submit Done');
    }

    //  <h1> {inputValue} </h1>   siempre sera el valor mas actualizado 
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                text="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}


