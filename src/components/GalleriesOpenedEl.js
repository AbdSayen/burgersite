import { useEffect, useState} from 'react';
import { useParams } from 'react-router';

const Galleriesopenedel = () => {
    const {id} = useParams();
    const [info, setInfo] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://burger-site-api.herokuapp.com/galleries")
        .then((response) => response.json())
        .then(data => {
            setInfo(data.find(item => item.id === id));
            setLoading(false);
        })
        .catch(err => {
            console.log(err.mesage)
        })
    }, []);

    return (
        <div className="galleriesOpenedEl">
            <div className="container">
                <div className="d-flex">
                    <img src={info.path} alt="" />
                    <div className="info">
                        <h1 className="titleText">{info.titleText}</h1>
                        <div className="dop" />
                        <h5 className="info-text">{info.infoText}</h5>
                        <p>Meatloaf rump short ribs pancetta sausage. Shank ribeye boudin biltong. Pork belly jerky tenderloin, tongue.</p>
                        <div>
                            <p>Category</p>
                            <span>SEASONAL    SWEETS</span>
                        </div>
                        <div>
                            <p>Location</p>
                            <span>Dining room</span>
                        </div>
                        <div>
                            <p>Year</p>
                            <span>2016</span>
                        </div>
                        <div className="icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-google"></i>
                            <i className="fa-brands fa-vk"></i>
                        </div>
                    </div>
                </div>

                <div className="btns">
                    <div className="btn">
                        <img src="" alt=""/> 
                        <div className="info"></div>
                    </div>
                </div>
                <button>ADD TO CARD</button>
            </div>
        </div>
    );
}

export default Galleriesopenedel;