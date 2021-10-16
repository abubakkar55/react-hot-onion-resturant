import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBasket } from "@material-ui/icons"
const Header = () => {
    const logo = "images/ICON/logo2.png";
    return (
        <>
            <div>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/">Home </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">Shop </NavLink>
                        </li>
                        <li>
                            <NavLink to="/review">Order Review </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">Cart </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/cart">
                                <ShoppingBasket />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/logout">  </NavLink>
                        </li>
                        <li>
                            <NavLink to="login">Login </NavLink>
                        </li>
                        <li>
                            <NavLink to="signup">Sign up </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header
