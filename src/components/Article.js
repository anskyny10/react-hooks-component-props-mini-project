// import React from 'react'

// function Article( { blog } ) {
    
//   return (
//     <div>
//       <article>
//         <h3>
//             {blog.title}
//         </h3>
//         <small>
//             {blog.date}
//         </small>
//         <p>
//             {blog.preview}
//         </p>
//       </article>
//     </div>
//   )
// }

// export default Article;

function Article({ blog }) {

	return (
		<article>
			<h3>{blog.title}</h3>
			<small>{blog.date}</small>
			<p>{blog.preview}</p>
		</article>
	);
}

export default Article;