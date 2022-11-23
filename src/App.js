import { useState } from "react";
import "./App.css";
import AddProduct from "./Components/AddProduct";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

function App() {
  const [input, setInput] = useState("");
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);

  return (
    <div className="App">
      <div className="app-container">
        <div className="comp-container">
          <Header />
        </div>
        <div className="comp-container">
          <AddProduct
            input={input}
            setInput={setInput}
            products={products}
            setProducts={setProducts}
            editProduct={editProduct}
            setEditProduct={setEditProduct}
          />
        </div>
        <div className="comp-container">
          <ProductList
            setInput={setInput}
            setProducts={setProducts}
            setEditProduct={setEditProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
