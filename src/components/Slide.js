const Slide = ({ active, path, title, infoText, dop }) => {
    return (
        <div className={"slide " + (active ? "active" : "")}>
            <div className="d-flex">
                <img src={path} alt="" />
                <div>
                    <h5>{dop}</h5>
                    <h1>{title}</h1>
                    <h6 className="info-text">{infoText}</h6>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Slide;