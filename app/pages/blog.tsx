import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/blog";
import { getPosts } from "../utils/post";
import BlogCard from "~/components/BlogCard";
import styles from "./blog.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Blog" },
    { name: "description", content: "My blogs" },
  ];
}

export default function Blog() {
  const allPosts = getPosts();

  // 【将来の拡張ポイント】ここで filter や slice を行います
  // 例：日付の新しい順に並び替える
  const displayedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <ContentArea>
      <div className={styles.grid}>
        {displayedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </ContentArea>
  );
}
