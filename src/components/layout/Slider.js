import { useState, useEffect } from 'react';
import Slide from "./Slide";

const Slider = () => {
    let index = 0;

    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8000/swipes')
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
        <div>
            {isLoading ? <h5>Loading...</h5> :
                    <div className="window">
                        <button className="prev-btn btn" onClick={swipePrev}><i className="fa-solid fa-angle-left"></i></button>
                        <button className="next-btn btn" onClick={swipeNext}><i className="fa-solid fa-angle-right"></i></button>
                        {info && info.map(swipe =>
                            <Slide key={swipe.id} path={swipe.path} title={swipe.title} infoText={swipe.infoText} dop={swipe.dop} />
                        )}
                </div>
            }
        </div>
    );
}

export default Slider;