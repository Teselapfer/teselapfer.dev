import type { Route } from "../+types/root";
import { NavLink } from "react-router";
import ContentArea from "~/components/ContentArea";
import Section from "~/components/Section";
import BlogCard from "~/components/BlogCard";
import { getPosts } from "../utils/post";
import styles from "./welcome.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio" },
    { name: "description", content: "Welcome to teselapfer.dev!" },
  ];
}

const latestVideo = {
  thumbnail: "https://img.youtube.com/vi/QhVEg7kbXoY/maxresdefault.jpg",
  url: "https://www.youtube.com/watch?v=QhVEg7kbXoY",
  id: "QhVEg7kbXoY",
};

// 1. 動的に画像を読み込むロジックを追加
const imageModules = import.meta.glob("/public/images/*.{png,jpg,jpeg,webp}", {
  eager: true,
  query: "?url",
});

// 画像を配列に変換し、最新の3枚を取得（ファイル名順で降順にする場合）
const latestPhotos = Object.entries(imageModules)
  .map(([path, module], index) => ({
    id: index,
    url: (module as any).default || module,
    path: path, // ソート用にパスを保持
  }))
  .sort((a, b) => b.path.localeCompare(a.path)) // ファイル名で降順ソート
  .slice(0, 3); // 最初の3枚だけ取る

export default function Welcome() {
  const allPosts = getPosts();
  const latestPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div>
      <ContentArea>
        <div className={styles.head}>Welcome to teselapfer.dev!</div>

        <Section title="お知らせ" titleEng="NEWS">
          <ul className={styles.newsList}>
            <li>2026.01.25 ポートフォリオを公開しました。</li>
          </ul>
        </Section>

        <Section title="最新の記事" titleEng="LATEST POSTS">
          <div>
            技術的な備忘録や日々の制作のこと、何気ない独り言を綴っています。
          </div>
          <div className={styles.grid}>
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <div className={styles.linkWrapper}>
            <NavLink to={"/blog"} className={styles.link}>
              記事一覧を見る →
            </NavLink>
          </div>
        </Section>

        <Section title="最新の動画" titleEng="LATEST MOVIE">
          <div>制作した動画はYouTubeで公開しています。</div>
          <div className={styles.videoSectionCenter}>
            <div className={styles.videoPlayerWrapperLarge}>
              <iframe
                src={`https://www.youtube.com/embed/${latestVideo.id}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Section>

        <Section title="写真" titleEng="PHOTOS">
          <div>暮らしのひととき、刹那の記録。</div>
          <div className={styles.photoPreviewGrid}>
            {latestPhotos.map((photo) => (
              <div key={photo.id} className={styles.photoWrapperSmall}>
                <img src={photo.url} alt="" loading="lazy" />
              </div>
            ))}
          </div>
          <div className={styles.linkWrapper}>
            <NavLink to={"/photo"} className={styles.link}>
              写真を見る →
            </NavLink>
          </div>
        </Section>
      </ContentArea>
    </div>
  );
}
