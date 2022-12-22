import classes from "./ProductAdd.module.css";

const ProductAdd = (props) => {
    return (
        <button
            className={`${classes.add}  ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default ProductAdd;
