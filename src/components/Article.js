import React from 'react'

function Article( { blog } ) {
	console.log(blog.title)
  return (
    <div>
      <article>
        <h3>
            {blog.title}
        </h3>
        <small>
            {blog.date}
        </small>
        <p>
            {blog.preview}
        </p>
      </article>
    </div>
  );
}

export default Article;