import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    });

    const listenScrollEvent = () => {
        if (window.scrollY > window.innerHeight) {
            setChangeColor(true);
        } else {
            setChangeColor(false);
        }
    }

    return (
        <nav>
            <div className="container">
                <ul className={"navBar " + (changeColor ? "scrolled" : "")}>
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about-us"><li>ABOUT US</li></Link>
                    <Link to="/our-menu"><li>OUR OFFER</li></Link>
                    <li>GALLERIES</li>
                    <li>BLOG</li>
                    <li>SHOP</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;