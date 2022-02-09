import { useState, useEffect } from 'react';
import Slide from "./Slide";

const Slider = () => {
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    const SelectSlide = id => {
        console.log(id);

        index = id;

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
    }

    const createSelector = () => {
        for (let index = 0; index < slides.length; index++) {
            let circle = document.createElement('div');
            circle.classList.add('circle');
            circle.setAttribute('data-id', index);
        }
    }

    const swipeNext = () => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
    }

    const swipePrev = () => {
        index--;
        if (index == -1) {
            index = slides.length - 1;
        }

        slides.forEach((slide) => {
            slide.classList.remove('active');
        });

        slides[index].classList.add('active');
    }

    createSelector();

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