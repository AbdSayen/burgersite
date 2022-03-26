const VarietyCard = ( {path, title, text} ) => {
    return (
        <div className="VarietyCard col-lg-3 col-md-6 col-sm-6 col-12">
            <img src={path} alt=""/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}

export default VarietyCard;