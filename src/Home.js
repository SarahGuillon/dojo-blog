import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

const Home = () => {

  // useState exercize (initial value of blogs => null & we will update it later with fetch)
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [title, setTitle] = useState("button tests");
  const [error, setError] = useState(null)


  // function onClick exercize
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

  const modifyValueOnClick = () => {
    setTitle("BUTTON TESTS");
  }

  // useEffect exercize with fetch (& with setTimeOut to see the loading message)
  useEffect(() => {
    console.log("use effect ran")

    setTimeout(() => {
      fetch('http://localhost:8000/blogss')
      .then(response => {
        console.log(response);
        // error message if i can access the server but problem with the fetch
        if (!response.ok) {
          throw Error("Cannot fetch the data for that resource")
        }
        return response.json()})
      .then(data => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      // error message if it can't connect to the server to fetch("failed to fetch") but doesn't see the error of the API if it can access the server
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      })
    }, 1000)

  },[]);

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
        { blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/> }
        { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Lucie")} title="Lucie's blog"/> }
      </div>
    </div>
  );
}
export default Home;
