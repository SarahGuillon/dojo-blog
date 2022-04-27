import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {

  // useState test (initial value of blogs => null & we will update it later with fetch)
  const [blogs, setBlogs] = useState(null);

  const [title, setTitle] = useState("button tests");

  const modifyValueOnClick = () => {
    setTitle("BUTTON TESTS");
  }

  // function onClick test
  const handleClick = event => {
    console.log("hello", event);
  }
  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  }

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog)=> {
      return blog.id !== id;
    })
    setBlogs(newBlogs);
  }

    // useEffect test
    useEffect(() => {
      console.log("use effect ran")
      fetch('http://localhost:8000/blogs')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBlogs(data);
      })
    },[]);

    // Datas displayed on homepage using functions & props
  return (
    <div className="home">
      <h2> {title} </h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("john", e)}>Click me again</button>
      <button onClick={modifyValueOnClick}>Upcase title</button>

      <div className="homeList">
        {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>}
        {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Lucie")} title="Lucie's blog"/>}
      </div>
    </div>
  );
}
export default Home;
