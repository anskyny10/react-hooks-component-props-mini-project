// import React from 'react';
// import Article from './Article';

// function ArticleListComponent({ blogs }) {
//     return (
//         <main>
//             {blogs.map(curBlog => (
//                 <Article key={curBlog.id} article={curBlog}/>
//             ))}
//         </main>
//     );
// }

// export default ArticleListComponent;

import Article from "./Article";

function ArticleList({ blogs }) {
    //[<Article />, <Article />, <Article />]
	return (
		<main>
			{blogs.map( curBlog => (
				<Article key={curBlog.id} blog={curBlog} />
			))}
		</main>
	);
}

export default ArticleList;