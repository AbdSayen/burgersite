const VarietyCard = ({path, title, text}) => {
    return (
        <div className="VarietyCard">
            <img src={path} alt=""/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
}

export default VarietyCard;