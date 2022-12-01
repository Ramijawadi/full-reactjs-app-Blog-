import React from 'react'
import { Link } from 'react-router-dom';
import { StyledArticle } from './styles/styled';

const BlogList = ({blogs}) => {
  return (
    <div>

    {blogs.map((blog) => (
        <StyledArticle className="blog-preview" key={blog.id}>
          <Link to = {`/blogs/${blog.id}`}>
          <h2> {blog.title} </h2>
          <h1> {blog.body} </h1>
          <h2> written by {blog.author}</h2>
          </Link>
        
        </StyledArticle>
      ))}
    </div>
  )
}

export default BlogList;