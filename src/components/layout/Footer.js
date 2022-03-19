import { keyGoogleMap } from '../../Keys';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';

const Footer = () => {

    const [coordinates, setCoordinates] = useState(
        {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        }
    );

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

                        <div className="icons"></div>
                    </div>

                    <div className="map">
                        {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: keyGoogleMap }}
                            defaultCenter={coordinates.center}
                            defaultZoom={coordinates.zoom}
                        >
                        </GoogleMapReact> */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48317.631982086!2d-122.36485507676794!3d47.59926001938031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1647684002562!5m2!1sen!2sus">
                        </iframe>
                    </div>
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