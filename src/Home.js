import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([null]);

  const [name, setName] = useState("Rami");
  //   const [age, setAge] = useState(25);

  //   const handleClick = () => {
  //     setName("Rami senior developper ");
  //     setAge(30);
  //   };

  /* create this function and pass it props in the BlogList componenet*/

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  useEffect(() => {
    fetch(" http://localhost:8000/blogs")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {/* <h2>Home page</h2>
      <p>
        {name} is {age} years old{" "}
      </p>
      <button onClick={() => handleClick()}> Click me </button> */}

      {blogs && <BlogList blogs={blogs}  />}
      handleDelete={handleDelete}

      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "rami jawadi")}
        title=" Rami's Blogs  ! "
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.title === "developpment")}
        title=" Development Blogs  ! "
      />
      <button onClick={() => setName("alex")}> change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
