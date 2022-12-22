import "./App.css";
import Header from "./Components/Header";
import Product from "./Components/Product";
import ProductDetails from "./Components/Details/ProductDetails";
import { useState } from "react";

function App(props) {
    const [product, setProduct] = useState({});
    const productHandler = (product) => {
        setProduct(product);
    };

    return (
        <div className="App">
            <Header product={{ ...product }}></Header>
            <div className="container">
                <Product></Product>
                <ProductDetails productInfo={productHandler}></ProductDetails>
            </div>
        </div>
    );
}

export default App;
