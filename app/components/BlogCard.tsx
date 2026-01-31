import { Link } from "react-router";
import type { Post } from "../utils/post";
import styles from "./blogCard.module.css";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {/* サムネイルがない場合のフォールバック画像を設定しておくと親切です */}
        <img
          src={post.thumbnail || "/images/no-image.png"}
          alt={post.title}
          loading="lazy"
        />
      </div>

      <div className={styles.info}>
        <time className={styles.date} dateTime={post.date}>
          {post.date}
        </time>

        <h3 className={styles.title}>{post.title}</h3>

        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
