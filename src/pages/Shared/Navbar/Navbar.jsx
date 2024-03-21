import { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import logo from '../../../assets/logos/logo.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='header'>
                <Link to='/'>
                    <img src={logo} style={{ height: '44px' }} alt="Logo" />
                </Link>
                <ul id='navbar' className={open ? '#navbar active' : '#navbar'}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li className='register-btn'>
                        <Link to="/register">Register</Link>
                    </li>
                    <li className='admin-btn'>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
                <div id='mobile' onClick={() => setOpen(!open)}>
                    {
                        open ?
                            <IoClose className="icon" />
                            :
                            <HiBars3CenterLeft className="icon" />
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;