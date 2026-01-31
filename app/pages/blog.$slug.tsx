import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { getPosts } from "../utils/post";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPosts().find((p) => p.slug === slug);

  if (!post) return <div>記事が見つかりません。</div>;

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
