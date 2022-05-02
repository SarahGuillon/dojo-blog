import { useState } from "react";
import BlogList from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {

  // useState exercize (initial value of blogs => null & we will update it later with fetch)
  // const [blogs, setBlogs] = useState(null);
  const [title, setTitle] = useState("button tests");
  // const [error, setError] = useState(null)
  const { data: blogs , isPending, error } = useFetch('http://localhost:8000/blogs');



  // function onClick exercize
  const handleClick = event => {
    console.log("hello", event);
  }

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  }

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog)=> {
  //     return blog.id !== id;
  //   })
  //   setBlogs(newBlogs);
  // }

  const modifyValueOnClick = () => {
    setTitle("BUTTON TESTS");
  }

  // what we displayed on homepage
  return (
    <div className="home">
      <h2> {title} </h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain("john", e)}>Click me again</button>
      <button onClick={modifyValueOnClick}>Upcase title</button>

      <div className="homeList">
        { isPending && <p>Loading...</p> }
        { error && <div>{ error }</div> }
        {/* { blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/> } */}
        { blogs && <BlogList blogs={blogs} title="All blogs"/> }
        { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Lucie")} title="Lucie's blog"/> }
      </div>
    </div>
  );
}
export default Home;
