import { Link } from "react-router";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <br />
      <Link to="/">Top</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/feature">Feature</Link>
    </div>
  );
}
