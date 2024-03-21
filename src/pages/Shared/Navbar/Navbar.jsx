import { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='header'>
                <Link to='/'>
                    {/* <img src={logo} alt="Logo" /> */}Logo
                </Link>
                <div>
                    <ul id='navbar' className={open ? '#navbar active' : '#navbar'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/order">Order</Link>
                        </li>
                        <li>
                            <Link className='button' to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <div id='mobile' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <IoClose className='fa-bars' />
                            :
                            <HiBars3CenterLeft className='fa-bars' />
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;