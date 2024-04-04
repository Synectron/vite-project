import "./App.css";
import ProductPage from "./Component/ProductPage";

import productData from "./productDetails";

function App() {
  return (
    <>
      {/* <Welcome className="" />
      <Bye /> */}
      <ProductPage hello={"Shubham"} products={productData} />
    </>
  );
}

export default App;

//function ab(val){
//val =>"hello"
// }

// ab("hello")
