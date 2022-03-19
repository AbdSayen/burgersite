import { useState, useEffect } from "react";
import Menuobject from "./MenuObject"

const Menu = ({ titleText, infoText, type }) => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://burger-site-api.herokuapp.com/menu2')
            .then((response) => response.json())
            .then(data => {
                setLoading(false);
                const obj = data[0][type];
                setInfo(obj)
                console.log(data[0][type]);
            })
            .catch(err => {
                console.log(err.message)
            })
    }, []);

    return (
        <div className="menu">
            <div className="dop">TASTY & CRUNCHY</div>
            <h1>{titleText}</h1>
            <h3 className="info-text">{infoText}</h3>
            {isLoading ? <h5>Loading...</h5> :
                <div className="container">
                    {info && info.map(menu2 =>
                        <Menuobject key={menu2.id} title={menu2.title} path={menu2.path} infoText={menu2.infoText} price={menu2.price} />
                    )}
                </div>
            }
        </div>
    );
}

export default Menu;