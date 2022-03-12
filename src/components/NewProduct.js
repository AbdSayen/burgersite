import React from 'react';

const NewProduct = ({ path, name, text, price }) => {
    return (
        <div className="newProduct" style={{ backgroundImage: `url(${path})` }}>
            <div className="text-container">
                <div className="text-width">
                    <div className="new-aling">
                        <h5 className="new-text">NEW</h5>
                    </div>
                    <h1>{name}</h1>
                    <h5 className="info-text">{text}</h5>
                    <h1>{price}</h1>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;