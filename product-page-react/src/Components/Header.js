import classes from "./Header.module.css";
import { useState, useMemo } from "react";
import Cart from "./Cart.js";

import logo from "../Challenge/images/logo.svg";
import avatar from "../Challenge/images/image-avatar.png";

import menu from "../Challenge/images/icon-menu.svg";
import close from "../Challenge/images/icon-close.svg";

const Header = (props) => {
    const cart = useMemo(
        () => <Cart product={{ ...props.product }} />,
        [props.product]
    );
    const [clickedMenu, setClickedMenu] = useState();
    const openedMenuHandler = () => {
        setClickedMenu(true);
    };
    const closedMenuHanlder = () => {
        setClickedMenu(false);
    };
    return (
        <header className={classes.header}>
            <nav className={classes.mainNav}>
                <img
                    src={menu}
                    alt=""
                    className={classes.menu}
                    onClick={openedMenuHandler}
                />
                {clickedMenu && (
                    <div>
                        <div className={classes.opendMenu}>
                            <img
                                src={close}
                                alt=""
                                onClick={closedMenuHanlder}
                                className={classes.sideMenuClose}
                            />
                            <a href="" className={classes.sideMenuLinks}>
                                Collections
                            </a>
                            <a href="" className={classes.sideMenuLinks}>
                                Men
                            </a>
                            <a href="" className={classes.sideMenuLinks}>
                                Women
                            </a>
                            <a href="" className={classes.sideMenuLinks}>
                                About
                            </a>
                            <a href="" className={classes.sideMenuLinks}>
                                Contact
                            </a>
                        </div>
                        <div
                            className={classes.opendMenuBackground}
                            onClick={closedMenuHanlder}
                        ></div>
                    </div>
                )}

                <a href="#">
                    <img src={logo} alt="" />
                </a>
                <a href="#" className={`${classes.menuLinks}`}>
                    Collections
                </a>
                <a href="#" className={classes.menuLinks}>
                    Men
                </a>
                <a href="#" className={classes.menuLinks}>
                    Women
                </a>
                <a href="#" className={classes.menuLinks}>
                    About
                </a>
                <a href="#" className={classes.menuLinks}>
                    Contact
                </a>
            </nav>
            <nav className={classes.personalNav}>
                {cart}
                <img src={avatar} className={classes.avatar} alt="" />
            </nav>
        </header>
    );
};

export default Header;
