import { Link } from "react-router";

export default function Feature() {
  return (
    <div>
      <h1>Feature</h1> <br />
      <Link to="/">Top</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/blog">Blog</Link>
    </div>
  );
}
