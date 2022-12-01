import React from "react";
import BlogList from "./BlogList";
import { useFetch } from './useFetch';

const Home = () => {
 
const { data: blogs , isLoading , error} = useFetch( "http://localhost:8000/blogs")

  return  (
    <div className="home">
      {error && <div  style={{ textAlign: "center", fontSize: "50px", color: "blue" }}> { error }</div>}
      {isLoading && (
        <div style={{ textAlign: "center", fontSize: "50px", color: "pink" }}>
          {" "}
          Loading ...
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
