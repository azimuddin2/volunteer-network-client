import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.png';
import { MdClose } from 'react-icons/md';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className='header container mx-auto px-4'>
                <Link to='/'>
                    <img src={logo} alt="Logo" className='logo' />
                </Link>
                <div>
                    <ul id='navbar' className={open ? '#navbar active' : '#navbar'}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/add-event">Add event</Link>
                        </li>
                        <li>
                            <Link to="/register-list">Volunteer register list</Link>
                        </li>
                        <li>
                            <Link className='button' to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
                <div
                    id='mobile'
                    onClick={() => setOpen(!open)}
                >
                    {
                        open ?
                            <MdClose className='text-3xl'></MdClose>
                            :
                            <HiBars3CenterLeft className='text-3xl'></HiBars3CenterLeft>
                    }
                </div>
            </nav>
        </>
    );
};

export default Header;