const CEProduct = ({path, name, infoText}) => {
    return (
        <div className="CEProduct">
            <img src={path} alt=""/>
            <h5>{name}</h5>
            <p className="info-text">{infoText}</p>
        </div>
    );
}

export default CEProduct;