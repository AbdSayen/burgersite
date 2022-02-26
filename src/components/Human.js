const Human = ({ path, name, rank }) => {
    return (
        <div className="human">
            <img src={path} alt="" />
            <div className="name">{name}</div>
            <div className="rank info-text">{rank}</div>
            <div className="icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-solid fa-circle-xmark"></i>
            </div>
        </div>
    );
}

export default Human;