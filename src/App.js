import React, { useState } from "react";

import PF from './components/pizzForm'

const App = () => {
  //setting up state for mapping later and passing it into pizzaform
  const [order, setorder] = useState([])
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <PF />
    </>
  );
};
export default App;
