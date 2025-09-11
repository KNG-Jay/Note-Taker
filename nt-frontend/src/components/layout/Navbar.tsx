import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };


    return (
        <nav className='navbar'>
            <div className='navbar-button'>
                <button
                    className={`hamburger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigator"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                <div className='navbar-menu-items'>
                    <Link to="/home" className="navbar-item" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link to="/create-note" className="navbar-item" onClick={() => setIsOpen(false)}>
                        New Note
                    </Link>
                    <Link to="/about" className="navbar-item" onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                    <Link to="/exit" className="navbar-item" onClick={() => setIsOpen(false)}>
                        Exit
                    </Link>
                </div>
            </div>
            {/*
            <div className='navbar-splash'>
                <h2>Note Manager</h2>
            </div>
            */}
            <div className='navbar-end'>
                <div className='search-bar-container'>
                    <label>Search:&nbsp;&nbsp;</label>
                    <SearchBar />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
