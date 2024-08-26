import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import logo from "./../../assets/images/freshcart-logo.svg"
import { AddToCartContext } from "../../context/addTocartContext";
function Navbar() {
    let {token,setToken}=useContext(AuthContext)
    let{numOfCartItems}=useContext(AddToCartContext)
    const navigate=useNavigate()
    function Logout(){
        setToken(null)
        navigate("/Login")
    }
    return ( 
        <>
        <nav className="flex px-10 py-3 items-center justify-between flex-col bg-[#e5e8e5] lg:flex-row">
            <div className="logo flex justify-center">
                <img src={logo} alt=""/>
            </div>
            <div className="links pt-2 text-center">
                {token?
                                <ul className="flex flex-col lg:flex-row gap-4 align-middle justify-center">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products">Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/category">Categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/brands">Brands</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/cart" className="relative">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">{numOfCartItems}</div>
                                    </NavLink>
                                </li>
                            </ul>
                :""
                }
            </div>
            <div className="social flex gap-4 items-center justify-center lg:mt-0 md:mt-5 sm:mt-5">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-instagram"></i>
                <div>
                    {
                    token?
                    <button onClick={Logout}>Logout</button>
                    :
                    <div className="flex gap-3">
                    <button><Link to="/login">Login</Link></button>
                    <button><Link to="/register">Register</Link></button>
                    </div>
                    }
                </div>
            </div>
        </nav>
        </>
     );
}
export default Navbar;  