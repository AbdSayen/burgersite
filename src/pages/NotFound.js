import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="notfound">
            <h3>We are sorry, page not found.</h3>
            <h1>Error 404.</h1>
            <Link to="/">Back to homepage</Link>
        </div>
    );
}

export default Notfound;