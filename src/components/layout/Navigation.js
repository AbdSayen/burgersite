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
        <nav className={(changeColor ? "scrolled" : "")}>
            <div className="container">
                <img src="http://fast-food.bold-themes.com/main-demo/wp-content/uploads/sites/2/2017/01/logo-classic-red-background.png" alt=""/>
                <ul className="navBar">
                    <Link to="/"><li>HOME</li></Link>
                    <Link to="/about-us"><li>ABOUT US</li></Link>
                    <Link to="/our-menu"><li>OUR OFFER</li></Link>
                    <Link to="/galleries"><li>GALLERIES</li></Link>
                    <Link to="/blog"><li>BLOG</li></Link>
                    <Link to="/brand"><li>SHOP</li></Link>             
                </ul>
                <div className="icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-vk"></i>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;