import React from 'react'
import "./Header.css";

const Header = () => {
    return (
        <>
            <nav className="navList">
                <div className="topHeaderList">
                    <div className="icon">
                        <img src="" alt="" />
                        Estatery
                    </div>
                    <ul className="headerList-1">
                        <li className="li">Rent</li>
                        <li className="li">Buy</li>
                        <li className="li">Sell</li>
                        <li className="li">Manage Property</li>
                        <li className="li">Resources</li>
                    </ul>
                </div>

                <ul className="headerList-2">
                    <li className="li">Sign In</li>
                    <li className="li">Sign Up</li>
                </ul>

            </nav>
        </>
    )
}

export default Header;
