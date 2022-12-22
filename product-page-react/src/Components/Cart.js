import classes from "./Cart.module.css";
import { useEffect, useState } from "react";
import ProductAdd from "./Details/ProductAdd";

import cart from "../Challenge/images/icon-cart.svg";
import blackCart from "../Challenge/images/icon-cart-black.svg";
import del from "../Challenge/images/icon-delete.svg";

const Cart = (props) => {
    const [clickedCart, setClickedCart] = useState();
    const [deleteProduct, setDeleteProduct] = useState(true);

    const opendCartHandler = () => {
        setClickedCart(true);
    };
    const closedCartHandler = () => {
        setClickedCart(false);
    };

    const deleteHandler = () => {
        setDeleteProduct(true);
        props.product.status = false;
    };

    useEffect(() => {
        !(props.product.price === undefined) && setDeleteProduct(false);
    }, [props.product]);

    return (
        <>
            <>
                <img
                    src={blackCart}
                    alt=""
                    onClick={closedCartHandler}
                    className={`${!clickedCart && classes.none}`}
                />
                <div
                    className={`${classes.opendCart} ${
                        !clickedCart && classes.block
                    }`}
                >
                    <div className={classes.cartHeading}>Cart</div>
                    <div className={classes.line} />

                    {deleteProduct == false ? (
                        <div className={classes.cart}>
                            <div className={classes.productDetails}>
                                <img
                                    src={props.product.image}
                                    alt=""
                                    className={classes.productImg}
                                />
                                <div className={classes.cardDetails}>
                                    <div className={classes.cartText}>
                                        {props.product.name}
                                    </div>
                                    <div className={classes.cartText}>
                                        {"$" + props.product.price}
                                        {" x " + props.product.amount}
                                        <span className={classes.price}>
                                            {" $" +
                                                (
                                                    props.product.price *
                                                    props.product.amount
                                                ).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                                <img
                                    src={del}
                                    alt=""
                                    className={classes.delete}
                                    onClick={deleteHandler}
                                />
                            </div>
                            <ProductAdd className={classes.checkout}>
                                Checkout
                            </ProductAdd>
                        </div>
                    ) : (
                        <div className={classes.cartContent}>
                            Your cart is empty
                        </div>
                    )}
                </div>
            </>
            <>
                <img
                    src={cart}
                    alt=""
                    onClick={opendCartHandler}
                    className={`${clickedCart && classes.none}`}
                />
                {deleteProduct === false && (
                    <span className={classes.cartAmountHeader}>
                        {props.product.amount}
                    </span>
                )}
            </>
        </>
    );
};

export default Cart;
