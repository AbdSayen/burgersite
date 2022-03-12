import { useState, useEffect } from "react";
import Gallerieselement from "./GalleriesElement";
import { Link } from 'react-router-dom';

const Gallerieselements = () => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://burger-site-api.herokuapp.com/galleries')
            .then((response) => response.json())
            .then(data => {
                setInfo(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <>
            {isLoading ? <h5>Loading...</h5> :
                <div className="galleriesElements">
                    <div className="container">
                        {info && info.map(galleries =>
                            <Link to={`/galleries-opened/${galleries.id}`}>
                                <Gallerieselement key={galleries.id} path={galleries.path} titleText={galleries.titleText} infoText={galleries.infoText} />
                            </Link>
                        )}
                        <h5>No more posts</h5>
                    </div>
                </div>
            }
        </>
    );
}

export default Gallerieselements;