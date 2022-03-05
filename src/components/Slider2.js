import { useState, useEffect } from 'react';
import Slide2 from './Slide2';

const Slider2 = () => {

    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch('https://burger-site-api.herokuapp.com/swipes')
            .then((response) => response.json())
            .then(data => {
                setInfo(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    const NextSlide = () => {
        if (index < info.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    const PrevSlide = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
        else {
            setIndex(info.length - 1);
        }
    }

    return (
        <div>
            {isLoading ? <h5>Loading...</h5> :
                <div className="slider2">
                    {info && info.map(swipe =>
                        <Slide2 key={swipe.id} NextSlide={NextSlide} PrevSlide={PrevSlide} active={index == swipe.id ? true : false} path={swipe.path2} title={swipe.title} infoText={swipe.infoText} dop={swipe.dop}/>
                    )}
                </div>
            }
        </div>
    );
}

export default Slider2;