import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetch';
import { useHistory } from 'react-router-dom';
import { Wrapper, StyledArticle } from './styles/styled';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleDelete = () => {

    fetch("http://localhost:8000/blogs/" + blog.id, {

      method: 'DELETE'
    })
      .then(() => {
        history.push('/')

      })
  }

  return (
    <div className="blog-details">
      {isLoading && <Wrapper> Loading ...</Wrapper>}
      {error && <h1> {error} </h1>}
      {blog && (
        <StyledArticle>
          <h2>{blog.title}</h2>
          <h1> {blog.body} </h1>
          <h2>{blog.author}</h2>
        </StyledArticle>
      )}

      <button onClick={handleDelete} > Delete</button>
    </div>
  )
}

export default BlogDetails