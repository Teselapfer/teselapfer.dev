import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/blog";
import styles from "./blog.module.css";
import { Link } from "react-router";

import { getPosts } from "../utils/post";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Blog" },
    { name: "description", content: "My blogs" },
  ];
}

export default function Blog() {
  const posts = getPosts();

  return (
    <div>
      <ContentArea>
        <div className={styles.grid}>
          {posts.map((post: any) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={styles.card}
            >
              <img src={post.thumbnail} alt="" />
              <div className={styles.info}>
                <span className={styles.date}>{post.date}</span>
                <h2>{post.title}</h2>
                <div className={styles.tags}>{post.tags.join(", ")}</div>
              </div>
            </Link>
          ))}
        </div>
      </ContentArea>
    </div>
  );
}
