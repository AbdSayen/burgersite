const Slide = ({ path, title, infoText, dop }) => {
    return (
        <div class="slide">
            <img src={path} alt="" />
            <div>
                <h5>{dop}</h5>
                <h2>{title}</h2>
                <h6>{infoText}</h6>
            </div>
        </div>
    );
}

export default Slide;