import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, body, author };
    setIsPending(true)
    // console.log(blog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log("new blog added");
      setIsPending(false);
      navigate('/');
    })
  }

  return (
    <div className="create" onSubmit={handleSubmit}>
      <h2>Add a new blog</h2>
      <form>
        <label>Title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>Body :</label>
        <textarea
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}>
        </textarea>
        <label>Author :</label>
        <select
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}>
          <option value="Mario"> Mario </option>
          <option value="Yoshi"> Yoshi </option>
        </select>
        { !isPending && <button> Add blog </button>}
        { isPending && <button disabled> Adding blog... </button>}
        <p> { title } </p>
      </form>
    </div>
  )

}

export default Create;
