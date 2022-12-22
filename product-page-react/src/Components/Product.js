import classes from "./Product.module.css";
import { useState } from "react";

import image1 from "../Challenge/images/image-product-1.jpg";
import image2 from "../Challenge/images/image-product-2.jpg";
import image3 from "../Challenge/images/image-product-3.jpg";
import image4 from "../Challenge/images/image-product-4.jpg";
import prev from "../Challenge/images/icon-previous.svg";
import prevHover from "../Challenge/images/icon-previous-orange.svg";
import next from "../Challenge/images/icon-next.svg";
import nextHover from "../Challenge/images/icon-next-orange.svg";
import close from "../Challenge/images/icon-close-white.svg";

const prodcutImages = [image1, image2, image3, image4];
let prodcutImagesElement = [];

const Product = (props) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextHandler = () => {
        currentImage < 3 && setCurrentImage(Number(currentImage) + 1);
    };
    const pervHandler = () => {
        currentImage > 0 && setCurrentImage(Number(currentImage) - 1);
    };

    const currentImageHandler = (event) => {
        setCurrentImage(Number(event.target.id));
    };
    for (let i = 0; i < 4; i++) {
        prodcutImagesElement[i] = (
            <img
                id={i}
                src={prodcutImages[i]}
                key={i}
                className={`${classes.sideImages} ${
                    i === currentImage && classes.currentImage
                }`}
                onClick={currentImageHandler}
            ></img>
        );
    }

    const [lightboxStatus, setCurrentStatus] = useState(false);
    const lightboxHandler = () => {
        lightboxStatus ? setCurrentStatus(false) : setCurrentStatus(true);
    };

    const [prevHoverStatus, setPrevHoverStatus] = useState(false);
    const prevHoverHandler = () => {
        prevHoverStatus ? setPrevHoverStatus(false) : setPrevHoverStatus(true);
    };
    const [nextHoverStatus, setNextHoverStatus] = useState(false);
    const nextHoverHandler = () => {
        nextHoverStatus ? setNextHoverStatus(false) : setNextHoverStatus(true);
    };

    return (
        <>
            <section className={classes.productImages}>
                {/*lightbox start*/}
                <div
                    className={`${classes.none} ${
                        lightboxStatus && classes.background
                    }`}
                    aria-hidden="true"
                >
                    <div
                        className={`${classes.none} ${
                            lightboxStatus && classes.lightbox
                        }`}
                        aria-hidden="true"
                    >
                        <img
                            src={close}
                            alt=""
                            className={classes.close}
                            onClick={lightboxHandler}
                        />
                        <img
                            src={prodcutImages[currentImage]}
                            alt="first image of the product"
                            className={`${classes.image}`}
                            onClick={lightboxHandler}
                        />
                        <div className={`${classes.arrow}`}>
                            <img
                                src={`${prevHoverStatus ? prevHover : prev}`}
                                alt=""
                                className={`${classes.prev} ${
                                    currentImage === 0 && classes.opacity
                                }`}
                                onClick={pervHandler}
                                onMouseOver={prevHoverHandler}
                                onMouseLeave={prevHoverHandler}
                            />
                        </div>
                        <div className={`${classes.arrow}  ${classes.above}`}>
                            <img
                                src={`${nextHoverStatus ? nextHover : next}`}
                                alt=""
                                className={`${classes.next} ${
                                    currentImage === 3 && classes.opacity
                                }`}
                                onClick={nextHandler}
                                onMouseOver={nextHoverHandler}
                                onMouseLeave={nextHoverHandler}
                            />
                        </div>

                        <div className={classes.imageBar}>
                            {prodcutImagesElement}
                        </div>
                    </div>
                </div>
                {/*lightbox end*/}

                <img
                    src={prodcutImages[currentImage]}
                    alt="first image of the product"
                    className={`${classes.image}`}
                    onClick={lightboxHandler}
                />
                <img
                    src={prev}
                    alt=""
                    className={`${classes.prev} ${
                        currentImage === 0 && classes.opacity
                    }`}
                    onClick={pervHandler}
                />
                <img
                    src={next}
                    alt=""
                    className={`${classes.next} ${
                        currentImage === 3 && classes.opacity
                    }`}
                    onClick={nextHandler}
                />
                <div className={classes.current}>{currentImage + 1}/4</div>
                <div className={classes.imageBar}>{prodcutImagesElement}</div>
            </section>
        </>
    );
};

export default Product;
