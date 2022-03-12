const Gallerieselement = ({ path, titleText, infoText }) => {
    return (
        <div className="galleriesElement">
            <img src={path} alt="" />
            <div className="info">
                <h4>{titleText}</h4>
                <div className="dop" />
                <div className="infoText">{infoText}</div>
                <div className="icons">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-google"></i>
                    <i className="fa-brands fa-vk"></i>
                </div>
            </div>
        </div>
    );
}

export default Gallerieselement;