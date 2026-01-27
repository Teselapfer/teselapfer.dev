import ContentArea from "~/components/ContentArea";
import type { Route } from "./+types/profile";
import Section from "~/components/Section";
import donky from "../assets/roba_plane.svg";
import styles from "./profile.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Profile" },
    { name: "description", content: "My profile" },
  ];
}

export default function Profile() {
  return (
    <div>
      <ContentArea>
        <div className={styles.profile}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <img src={donky} alt="Teselapfer" />
            </div>
            <div className={styles.name}>Teselapfer</div>
          </div>
          <div className={styles.description}>
            初めまして！
            <br />
            名前は読みにくいと思うので”えせる”と呼んでください。
            <br />
            京都で活動しています。
          </div>

          <Section title="好きなこと・もの" titleEng="LIKE">
            <ul className={styles.newsList}>
              <li>- 寺社仏閣巡り</li>
              <li>- ゲーム</li>
              <li>- 動物</li>
            </ul>
          </Section>

          <Section title="経歴" titleEng="CAREER">
            <div>
              <ul className={styles.newsList}>
                <li>2025/03 松江工業高等専門学校を卒業</li>
                <li>2025/04 大阪のIT企業へ入社</li>
              </ul>
            </div>
          </Section>

          <Section title="技術" titleEng="TECH">
            <div>
              <ul className={styles.newsList}>
                <li>フロントエンド・・・ React, FastAPI(勉強中)</li>
                <li>バックエンド・・・Laravel, Ruby on Rails, Go(勉強中)</li>
                <li>インフラ・・・Azure(1度だけ)</li>
              </ul>
            </div>
          </Section>
        </div>
      </ContentArea>
    </div>
  );
}
