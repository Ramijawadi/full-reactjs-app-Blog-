import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not access to data form this endpoint");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsLoading(false);
          setError(null)
        })

        .catch((err) => {
          setError(err.message)
          isLoading(false)
        });
    }, 1000);
  }, []);

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
