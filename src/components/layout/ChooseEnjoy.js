import {useState, useEffect} from 'react';
import CEProduct from './CEProduct';

const ChooseEnjoy = () => {
    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/menu')
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
        <div className="chooseEnjoy">
            <div className="container">
                <div className="info">
                    <h5>TASTY & CRUNCHY</h5>
                    <h1>Choose & enjoy</h1>
                    <p className="info-text">Inspired by recipes and creations of world’s best chefs</p>
                </div>
                {isLoading ? <h5>Loading...</h5> :
                    <div className="CEProducts">
                        {info && info.map(menu =>
                            <CEProduct key={menu.id} path={menu.path} name={menu.name} infoText={menu.infoText}/>
                        )}
                    </div>
                }
                <div className="w-100 d-flex justify-content-center my-5">
                    <button>VIEW OUR FULL MENU</button>
                </div>
            </div>
        </div>
    );
}

export default ChooseEnjoy;