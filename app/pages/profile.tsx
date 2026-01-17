import { Link } from "react-router";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <br />
      <Link to="/">Top</Link>
      <br />
      <Link to="/blog">Blog</Link>
      <br />
      <Link to="/feature">Feature</Link>
    </div>
  );
}
