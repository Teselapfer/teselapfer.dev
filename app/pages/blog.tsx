import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/blog";
import styles from "./blog.module.css";
import { Link } from "react-router";
import { getPosts, type Post } from "../utils/post";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Blog" },
    { name: "description", content: "My blogs" },
  ];
}

export default function Blog() {
  const posts = getPosts();

  return (
    <ContentArea>
      <div className={styles.grid}>
        {posts.map((post: Post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className={styles.card}
          >
            {/* サムネイルがない場合のフォールバック */}
            <div className={styles.imageWrapper}>
              <img
                src={post.thumbnail || "/assets/default-thumb.png"}
                alt={post.title}
              />
            </div>

            <div className={styles.info}>
              <span className={styles.date}>{post.date}</span>
              <h2 className={styles.title}>{post.title}</h2>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ContentArea>
  );
}
