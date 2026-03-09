import type { Route } from "./+types/feature";
import ContentArea from "~/components/ContentArea";
import Section from "~/components/Section";
import styles from "./photo.module.css";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Photo" },
    { name: "description", content: "What's new" },
  ];
}

const imageModules = import.meta.glob("/public/images/*.{png,jpg,jpeg,svg}", {
  eager: true,
  query: "?url", // URLとして取得
});

// 取得したオブジェクトからパスの配列を作成
const photos = Object.entries(imageModules).map(([path, module], index) => {
  // path は "/public/images/photo1.jpg" のようになるので
  // ブラウザ用に "/images/photo1.jpg" に整形する
  const url = path.replace("/public", "");

  return {
    id: index,
    url: (module as any).default || module,
    alt: `Photo ${index + 1}`,
  };
});

export default function Photo() {
  return (
    <div>
      <ContentArea>
        <div className={styles.feature}>
          <div className={styles.head}>Photo</div>
          <div className={styles.description}>
            旅先で見つけた景色、日々の暮らしに溶け込む光。
            <br />
            日々のワンシーンをお届けします。
          </div>

          <div className={styles.photoGrid}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.photoWrapper}>
                <img src={photo.url} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </ContentArea>
    </div>
  );
}
