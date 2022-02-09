import React from 'react';

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
                    <li>HOME</li>
                    <li>PAGES</li>
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