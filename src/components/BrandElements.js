import { useState, useEffect } from "react";
import Brandelement from "./BrandElement";

const Brandelements = () => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://burger-site-api.herokuapp.com/brand")
            .then((response) => response.json())
            .then(data => {
                setInfo(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.mesage)
            })
    }, []);

    return (
        <>
            { isLoading ? <h5>Loading..</h5> :
                <div className="brandelEments">
                    <div className="container">
                        {info && info.map(brand =>
                            <Brandelement key={brand.id} path={brand.path} titleText={brand.titleText} price={brand.price} />
                        )}
                    </div>
                </div>
            }
        </>

    );
}

export default Brandelements;