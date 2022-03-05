import { useState, useEffect } from 'react';
import React from 'react';
import Award from './Award';

const Awards = () => {
    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://burger-site-api.herokuapp.com/awards')
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
        <div className="awards">
            <div className="info">
                <div className="dop">LEARN MORE</div>
                <h1>Our Awards</h1>
                <span className="info-text">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</span>
            </div>
            {isLoading ? <h5>Loading...</h5> :
                <div className="container">
                    {info && info.map(awards =>
                        <Award path={awards.path} />
                    )}
                </div>
            }
        </div>);
}

export default Awards;