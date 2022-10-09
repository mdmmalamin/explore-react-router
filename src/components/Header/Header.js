import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header'>
            <nav>
                <div onClick={()=> setOpen(!open)} className='icon'>
                    {
                        open ? <XMarkIcon className='open' /> : <Bars3Icon className='close' />
                    }
                </div>
                <div className={`link ${open ? 'on' : 'off'} ${({isActive}) => isActive ? 'active' : undefined}`}>
                    <NavLink
                        to="/home"
                        // className=
                    >Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/friends">Friends</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <Link to="/about">About</Link>
                </div>
                
            </nav>
            <p>This is Common Header</p>

            {/* <br />
            reload...
            <a href="/home">Home</a>
            <a href="/about">About</a> */}

        </div>
    );
};

export default Header;