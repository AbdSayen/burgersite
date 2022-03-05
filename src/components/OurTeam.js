import Human from "./Human";
import { useState, useEffect } from 'react';

const Ourteam = () => {
    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://burger-site-api.herokuapp.com/people')
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
        <div className="our-team">
            <div className="container">
                <div className="dop">LEARN MORE</div>
                <h1>Our Great Crew</h1>
                <div className="info-text">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.</div>
                <div className="people">
                    {info && info.map(people =>
                        <Human key={people.id} path={people.path} name={people.name} rank={people.rank}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Ourteam;