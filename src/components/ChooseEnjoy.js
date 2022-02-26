import { useState, useEffect } from 'react';
import CEProduct from './CEProduct';

const ChooseEnjoy = ({ nItems, hasTitle }) => {
    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [someData, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/menu')
            .then((response) => response.json())
            .then(data => {
                setInfo(data);
                setLoading(false);
                setData(info.slice(0, nItems));
            })
            .catch(err => {
                console.log(err.message);
            })
    }, [info]);


    return (
        <div className="chooseEnjoy">
            <div className="container">
                {hasTitle ? <div className="info">
                    <h5>TASTY & CRUNCHY</h5>
                    <h1>Choose & enjoy</h1>
                    <p className="info-text">Inspired by recipes and creations of world’s best chefs</p>
                </div>: null}

                {isLoading ? <h5>Loading...</h5> :
                    <div className="CEProducts">
                        {someData && someData.map(menu =>
                            <CEProduct key={menu.id} path={menu.path} name={menu.name} infoText={menu.infoText} />
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