import classes from "./ProductDetails.module.css";
import ProductAmount from "./ProductAmount";
import ProductAdd from "./ProductAdd";
import { useEffect, useState } from "react";

import Whitecart from "../../Challenge/images/icon-cart-white.svg";
import productImg from "../../Challenge/images/image-product-1.jpg";

const product1 = {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.`,
    price: 250.0,
    discount: 0.5,
    img: productImg,
};

const ProductDetails = (props) => {
    const [amountOfItems, setAmount] = useState(0);
    const amountHandler = (amountOfItems) => {
        setAmount(amountOfItems);
    };

    const addHandler = () => {
        props.productInfo({
            name: product1.name,
            price:
                product1.discount != 0
                    ? (product1.price * product1.discount).toFixed(2)
                    : product1.price.toFixed(2),
            image: product1.img,
            amount: amountOfItems,
            status: true,
        });
    };
    return (
        <section className={classes.details}>
            <p className={classes.productCompany}>SNEAKER COMPANY</p>
            <h1 className={classes.productName}>{product1.name}</h1>
            <p className={classes.description}>{product1.description}</p>
            <div className={classes.priceDetails}>
                <div className={classes.container}>
                    <h2 className={classes.price}>
                        $
                        {product1.discount != 0
                            ? (product1.price * product1.discount).toFixed(2)
                            : product1.price.toFixed(2)}
                    </h2>
                    <div className={classes.discount}>
                        {product1.discount != 0 &&
                            product1.discount * 100 + "%"}
                    </div>
                </div>
                <div className={classes.disPrice}>
                    ${product1.price.toFixed(2)}
                </div>
            </div>
            <div className={classes.productAmoAdd}>
                <ProductAmount amount={amountHandler}></ProductAmount>
                <ProductAdd onClick={addHandler} className={classes.add}>
                    <img src={Whitecart} alt="" />
                    Add to cart
                </ProductAdd>
            </div>
        </section>
    );
};

export default ProductDetails;
