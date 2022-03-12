const BlogPosts = () => {
    return (
        <>
            <div className="blogPosts">
                <div className="container">
                    {info && info.map()}
                </div>
            </div>
        </>
    );
}

export default BlogPosts;