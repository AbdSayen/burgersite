const Aboutusbanner = ( {titleText, infoText} ) => {
    return (
        <div className="about-us">
            <div className="background" />
            <div className="container">
                <div className="width-80">
                    <h5>HOME</h5>
                    <h1>{titleText}</h1>
                    <div className="transition" />
                    <div className="info-text">{infoText}</div>
                </div>
            </div>
        </div>
    );
}

export default Aboutusbanner;