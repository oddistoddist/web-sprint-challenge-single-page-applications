import React, { Fragment, useState } from "react";

import PF from './components/pizzForm'
import schema from './validation/formSchema'
import { reach } from 'yup'

const App = () => {

  const initial ={
    nameInput: '',
    sizeDropdown: '',
    tofu: false,
    mushrooms: false,
    mozzarella: false,
    specialText: ''
}

const submit = () => {
  const newOrder = {
    Customer: values.nameInput.trim(),
    Size: values.sizeDropdown.trim(),
    addOns: ['tofu', 'mushrooms', 'mozzarella'].filter(add => values[add]+' '),
    specialText: values.specialText.trim() 
  }
  setOrder([...order, newOrder])
  setValues(initial)
}

  //setting up state for mapping later and passing it into pizzaform
  const [values, setValues] = useState(initial)
  const [formErrors, setFormErrors] = useState({})
  const [order, setOrder] = useState([])

  const validate = (name, value) => {
    reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({...formErrors, [name]: ''}))
        .catch(err => setFormErrors({[name]: err.errors[0]}))

}
  const inputChange = (name, value) => {
    validate(name, value)
    setValues({
      ...values,
      [name]: value // NOT AN ARRAY
    })
  }
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PF values={values} setValues={setValues} order={order} setOrder={setOrder} inputChange={inputChange} initial={initial} formErrors={formErrors} submit={submit} />
      {order.map((order, idx) => {
        return(
          <React.Fragment>
            <h3>{order.Customer}</h3>
            <p>{order.Size}</p>
            <p>{order.addOns}</p>
            <p>{order.specialText}</p>
          </React.Fragment>
        )
      })}
    </>
  );
};
export default App;
