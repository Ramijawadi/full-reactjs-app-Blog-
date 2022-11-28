import React, { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "sport", author: "rami jawadi", id: 1 },
    { title: "commercial", author: "salah mouhamed", id: 2 },
    { title: "social", author: "ibnou khouldoun", id: 3 },
    { title: "developpment", author: "rami jawadi", id: 4 },
    { title: "developpment", author: "salah amine", id: 5 },
    { title: "developpment", author: "mkadmi mouadh", id: 6 },
  ]);

  //   const [name, setName] = useState("Rami");
  //   const [age, setAge] = useState(25);

  //   const handleClick = () => {
  //     setName("Rami senior developper ");
  //     setAge(30);
  //   };

  return (
    <div className="home">
      {/* <h2>Home page</h2>
      <p>
        {name} is {age} years old{" "}
      </p>
      <button onClick={() => handleClick()}> Click me </button> */}

     <BlogList blogs={blogs}  title="all Blogs ! " />
     <BlogList blogs={blogs.filter((blog)=> blog.author === "rami jawadi" ) }  title=" Rami's Blogs  ! " />
     <BlogList blogs={blogs.filter((blog)=> blog.title === "developpment" ) }  title=" Development Blogs  ! " />

    </div>
  );
};

export default Home;
