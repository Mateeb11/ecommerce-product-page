import classes from "./ProductAmount.module.css";
import minus from "../../Challenge/images/icon-minus.svg";
import plus from "../../Challenge/images/icon-plus.svg";
import { useEffect, useState } from "react";

const ProductAmount = (props) => {
    const [amountOfItems, amountHandler] = useState(1);
    const increaseAmount = () => {
        amountHandler(amountOfItems + 1);
    };
    const decreaseAmount = () => {
        amountOfItems > 1 && amountHandler(amountOfItems - 1);
    };

    useEffect(() => {
        props.amount(amountOfItems);
    });

    return (
        <div className={classes.amount}>
            <img
                src={minus}
                alt=""
                onClick={decreaseAmount}
                className={`${amountOfItems < 2 && classes.minus}`}
            />
            <div>{amountOfItems}</div>
            <img src={plus} alt="" onClick={increaseAmount} />
        </div>
    );
};

export default ProductAmount;
