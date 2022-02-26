const Slide2 = ({ dop, active, title, path, infoText, NextSlide, PrevSlide }) => {
    return (
        <div className={"slide2 " + (active ? "active" : "")}>
            <div className="window">
                <button className="prev-btn btn" onClick={PrevSlide}><i className="fa-solid fa-angle-left"></i></button>
                <button className="next-btn btn" onClick={NextSlide}><i className="fa-solid fa-angle-right"></i></button>
                <div className="info">
                    <div className="dop">{dop}</div>
                    <h1>{title}</h1>
                    <p>{infoText}</p>
                    <button>BOOK YOUR TABLE</button>
                </div>
                <img src={path} alt="" />
            </div>
        </div>
    );
}

export default Slide2;