import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="errorpage">
      <h2>This page doesn't exist</h2>
      <Link to="/">
        <p>Go back to the website</p>
      </Link>
    </div>
    );
}

export default NotFound;
