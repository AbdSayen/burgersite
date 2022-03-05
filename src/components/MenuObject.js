const Menuobject = ({ path, title, infoText, price }) => {
    return (
        <div className="menuObject">
            <img src={path} alt="" />
            <div className="info">
                <h3>{title}</h3>
                <h6 className="info-text">{infoText}</h6>
            </div>
            <h4>{price}</h4>
        </div>
    );
}

export default Menuobject;