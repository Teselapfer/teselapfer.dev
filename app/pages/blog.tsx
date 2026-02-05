import { useSearchParams } from "react-router";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const allPosts = getPosts();

  const currentPage = parseInt(searchParams.get("page") || "1");
  const postsPerPage = 16;

  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  // 4. 現在のページに表示する記事を切り出す (例: page2なら 16〜31件目)
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = sortedPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo(0, 0);
  };

  return (
    <ContentArea>
      <div className={styles.head}>Blog</div>
      <div className={styles.grid}>
        {displayedPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={styles.pageButton}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`${styles.pageButton} ${
                currentPage === i + 1 ? styles.activePage : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      )}
    </ContentArea>
  );
}
