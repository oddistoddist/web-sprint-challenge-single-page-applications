
import React, { useState, useEffect } from 'react'

export default function PF (props) {
    const {
        values,
        setValues,
        order,
        setOrder,
        inputChange,
        initial,
        formErrors,
        submit
    } = props

   
  

    const onchange = (evt) =>{
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        submit()
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Name
                    <input type="text" name='nameInput' id='nameInput' onChange={onchange} value={values.nameInput} />
                </label>
                
                <label htmlFor="sizeDropdown">What size would you like?
                    <select name="sizeDropdown" id="sizeDropdown" onChange={onchange} value={values.sizeDropdown}>
                        <option value="10-inch">10 Inches</option>
                        <option value="14-inch">14 Inches</option>
                    </select>
                </label>
                <label htmlFor="tofu">Tofu?
                    <input type="checkbox" name="tofu" id="tofu" checked={values.tofu} onChange={onchange} value={values.tofu} />
                </label>
                <label htmlFor="mushrooms">Mushrooms?
                    <input type="checkbox" name="mushrooms" id="mushrooms" checked={values.mushrooms} onChange={onchange} value={values.mushrooms}/>
                </label>
                <label htmlFor="mozzarella">Mozzarella?
                    <input type="checkbox" name="mozzarella" id="mozzarella" checked={values.mozzarella} onChange={onchange} value={values.mozzarella} />
                </label>

                <label htmlFor="specialText">Special Instructions
                    <input type="text" name='specialText' id='specialText' onChange={onchange} value={values.specialText} />
                </label>

                <button id='order-button'> make order </button>
            </form>
            <p>{formErrors.name}</p>
        </div>
    )
}
