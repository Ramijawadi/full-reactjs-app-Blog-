import React from "react";
import BlogList from "./BlogList";
import { useFetch } from './useFetch';
import { Wrapper,DivWrapper} from "./styles/styled";


const Home = () => {
 
const { data: blogs , isLoading , error} = useFetch( "http://localhost:8000/blogs")

  return  (
    <div>
      {error &&   <DivWrapper>{ error }</DivWrapper>}
      {isLoading && (
        <Wrapper>
          {" "}
          Loading ...
          </Wrapper>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
