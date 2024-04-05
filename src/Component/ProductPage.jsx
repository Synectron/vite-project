// import axios from "axios";
// import { useEffect } from "react";

import { useState } from "react";

const ProductPage = (val) => {
  const [counter, setCounter] = useState(0);
  //const [state, setState] = useState(initialState)
  const [name, setName] = useState(null);

  //let counter = 0;

  const clickCounter = () => {
    setCounter(counter + 1);
    setName("Amrita");
    console.log("adgs");
  };

  return (
    <>
      {counter}
      {name}
      <button onClick={clickCounter}>Click me</button>
    </>
  );
};

export default ProductPage;

//cognitive commplexity

//closure + hoisting +lexical env

// useEffect(() => {
//   axios
//     .get("https://localhost:3001/products")
//     .then((response) => {
//       console.log("response:", response.data);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     });
// }, []);
