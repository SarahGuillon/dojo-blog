import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {

  const [blogs, setBlogs] = useState([
    {title: "my website1", body: "lorem ipsum...", author: "Helen", id: 1 },
    {title: "my website2", body: "lorem ipsum...", author: "Julia", id: 2 },
    {title: "my website3", body: "lorem ipsum...", author: "Leo", id: 3 }])

  const [title, setTitle] = useState("button tests");

  const handleClick = event => {
    console.log("hello", event);
  }
  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  }

  const modifyValueOnClick = () => {
    setTitle("BUTTON TESTS");
  }

  return (
    <div className="home">
      <h2> {title} </h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("john", e)}>Click me again</button>
      <button onClick={modifyValueOnClick}>Upcase title</button>

      <div className="homeList">
        <BlogList blogs={blogs} title="All blogs"/>
        <BlogList blogs={blogs.filter((blog) => blog.author === "Julia")} title="Julia's blog"/>
      </div>
    </div>
  );
}
export default Home;
