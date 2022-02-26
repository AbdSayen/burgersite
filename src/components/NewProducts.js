import { useState, useEffect } from 'react';
import NewProduct from './NewProduct';

const NewProducts = () => {
    const [info, setInfo] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8000/cards')
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
                <div className="newProducts">
                    {info && info.map(cards =>
                        <NewProduct key={cards.id} path={cards.path} name={cards.name} text={cards.text} price={cards.price} sale={cards.sale} />
                    )}
                </div>
            }
        </div>
    );
}

export default NewProducts;