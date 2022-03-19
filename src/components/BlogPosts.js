import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

const BlogPosts = () => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://burger-site-api.herokuapp.com/galleries")
            .then((response) => response.json())
            .then(data => {
                setInfo(data);
                setLoading(false);
                console.log(data);
            })
            .catch(err => {
                console.log(err.mesage);
            })
    }, []);

    return (
        <>
            {isLoading ? <h5>Loading...</h5> :
                <div className="blogPosts">
                    <div className="container">
                        {info && info.map(galleries =>
                            <BlogPost key={galleries.id} path={galleries.path} titleText={galleries.titleText} infoText={galleries.infoText} />
                        )}
                    </div>
                </div>
            }
        </>
    );
}

export default BlogPosts;