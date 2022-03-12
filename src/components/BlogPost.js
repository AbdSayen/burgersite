const BlogPost = ( { path, titleText, infoText } ) => {
    return (
        <div className="blogPost">
            <img src={path} alt=""/>
            <h1>{titleText}</h1>
            <div className="dop"></div>
            <h4>{infoText}</h4>
        </div>
    );
}

export default BlogPost;