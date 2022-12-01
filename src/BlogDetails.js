import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './useFetch';
import { Wrapper,StyledArticle} from "./styles/styled";

const BlogDetails = () => {
const {id} = useParams (); 
const { data:blog , error , isLoading} = useFetch("http://localhost:8000/blogs/" + id)
  return (
    <div className="blog-details">
  {isLoading && <Wrapper> Loading ...</Wrapper>}
  {error && <h1> { error} </h1>}
  {blog && (
    <StyledArticle>
   <h2>{blog.title}</h2>
   <h1> {blog.body} </h1>
   <h2>{blog.author}</h2>
   </StyledArticle>
  )}


    </div>
  )
}

export default BlogDetails