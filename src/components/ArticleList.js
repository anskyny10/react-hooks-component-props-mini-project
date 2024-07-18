import React from 'react';
import Article from './Article';

function ArticleList({ blogs }) {
	console.log(Article)
    return (
        <main>
            {blogs.map( curBlog => (
                <Article key={curBlog.id} blog={curBlog} />
            ))}
        </main>
    );
}

export default ArticleList;