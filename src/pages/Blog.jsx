import React from 'react';

function Blog() {
  const blogPosts = [
    {
      title: 'Getting Started with React',
      author: 'John Doe',
      date: '2023-01-15',
      content: 'This is the content of the first blog post...',
    },
    {
      title: 'State Management in React Applications',
      author: 'Jane Smith',
      date: '2023-02-10',
      content: 'This is the content of the second blog post...',
    },
    {
      title: 'Styling in React with CSS Modules',
      author: 'Mike Johnson',
      date: '2023-03-05',
      content: 'This is the content of the third blog post...',
    },
  ];

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>
            <strong>Author: {post.author}</strong>
          </p>
          <p>
            <strong>Date: {post.date}</strong>
          </p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
