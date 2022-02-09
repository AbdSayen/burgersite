import { useEffect, useState } from 'react';
import VarietyCard from './VarietyCard';
import { Link } from 'react-router-dom';

const VarietyCards = () => {

    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/varietry')
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
        <div className="VarietyCards">
            <div className="container">
                {isLoading ? <h5>Loading...</h5> :
                    <div className="cards">
                        {info && info.map(varietry =>
                            <VarietyCard key={varietry.id} path={varietry.path} title={varietry.title} text={varietry.text} />
                        )}
                    </div>
                }
            </div>
        </div>
    );
}

export default VarietyCards;