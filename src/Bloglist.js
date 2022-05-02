import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  const handleDelete = props.handleDelete;


  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`}>
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
          </div>
          </Link>
      ))}
    </div>
  )
}

export default BlogList;
