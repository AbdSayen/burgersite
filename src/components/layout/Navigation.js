import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    // let navBar = document.querySelector('nav');
    // window.onscroll = function () { scroll() };

    // function scroll() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         navBar.style.background = "white";
    //     } else {
    //         navBar.style.background = "transparent";
    //     }
    // }

    return (
        <nav>
            <div className="container">
                <ul className="navBar">
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about-us"><li>ABOUT US</li></Link> 
                    <li>OUR OFFER</li>
                    <li>GALLERIES</li>
                    <li>BLOG</li>
                    <li>SHOP</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;