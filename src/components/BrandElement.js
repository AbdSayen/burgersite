const Brandelement = ( {path, titleText, price} ) => {
    return (
        <div className="brandElement">
            <img src={path} alt=""/>
            <h5 className="titleText">{titleText}</h5>
            <h5 className="price">{price}</h5>
            <button>ADD TO CARD</button>
        </div>
    );
}

export default Brandelement;