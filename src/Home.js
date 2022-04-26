import { useState } from "react";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: "my website1", body: "lorem ipsum...", author: "Helen", id: 1 },
    {title: "my website2", body: "lorem ipsum...", author: "Julia", id: 2 },
    {title: "my website3", body: "lorem ipsum...", author: "Leo", id: 3 }])

  const [name, setName] = useState("mario");

  const handleClick = event => {
    console.log("hello", event);
  }
  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  }

  const modifyValueOnClick = () => {
    setName("thom");
  }

  return (
    <div className="home">
      <h2>Home</h2>
      <p> Hello {name} </p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("john", e)}>Click me again</button>
      <button onClick={modifyValueOnClick}>Modify the name</button>
      <div className="homeList">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
