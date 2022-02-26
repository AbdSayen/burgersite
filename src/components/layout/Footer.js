const Footer = () => {
    return (
        <>
            <footer>
                <div className="call-us">
                    <div className="info">
                        <div className="dop">CALL US</div>
                        <h1>+1-202-555-016</h1>
                        <div className="services-item">
                            <i className="fa-solid fa-clock"></i>
                            {/* <i className="fa-solid fa-location-dot"></i> */}
                            <span className="info-text">
                                mon-thu: 11.00 – 23.00 <br />
                                sat: 12.00 – 23.00 <br />
                                sun: 12.00 – 21.00 <br />
                            </span>
                        </div>

                        <div className="services-item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="info-text">
                                60 East 65th Street <br />
                                New York City <br />
                                NY 10065 <br />
                            </span>
                        </div>

                        <div className="icons">

                        </div>
                    </div>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3121656.012188483!2d47.75453!3d40.17585849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1644757883839!5m2!1sru!2s" width="600" height="450" style="border:0;" loading="lazy"></iframe> */}
                    <div className="map"></div>
                </div>
                <div className="app">
                    <div className="container">
                        <h1>DOWNLOAD OUR MENU</h1>
                        <button>DOWNLOAD</button>
                    </div>
                </div>
                <div className="proov">
                    <div className="container">
                        <h6>Copyright Bold Themes 2017.</h6>
                        <div>
                            <h6>Home</h6>
                            <h6>Pages</h6>
                            <h6>Our offer</h6>
                            <h6>Galleries</h6>
                            <h6>Blog</h6>
                            <h6>Shop</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;