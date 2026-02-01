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
            <div className={styles.name}>
              <div className={styles.nameEng}>Teselapfer</div>
              <div className={styles.nameJp}>テセラプファー・テセラファー</div>
            </div>
          </div>
          <div className={styles.description}>
            初めまして！
            <br />
            名前は読みにくいと思うので”えせる”と呼んでください。
            <br />
            京都で活動しています。
            <br />
            興味を持ったことにいろいろ手を出してみる、一歩を踏み出すのが取り柄の人間です。
          </div>

          <Section title="好物" titleEng="LIKE">
            <ul className={styles.newsList}>
              <li>- 寺社仏閣巡り</li>
              <li>- ゲーム</li>
              <li>- 動物</li>
            </ul>
          </Section>

          <Section title="経歴" titleEng="CAREER">
            <div>
              プログラミングをしてみたいと思い、高専で情報工学を専攻しました。
              <br />
              学生の間はMMDの動画制作やデザインの勉強をしており、学内のポスターやイベントのOPムービーなどを作りました。
              <br />
              研究活動ではゲーム工学の研究室に所属していたため、ボードゲームのAIについて研究をしていました。
            </div>
          </Section>

          <Section title="技術" titleEng="TECH">
            <div>
              主にWebの技術を身に着けています。
              <ul className={styles.newsList}>
                <li>- フロントエンド・・・ React</li>
                <li>
                  - バックエンド・・・ Laravel、 Ruby on Rails、
                  FastAPI(勉強中)、Go(勉強中)
                </li>
                <li>- インフラ・・・ Azure(初心者)</li>
              </ul>
            </div>
          </Section>

          <Section title="連絡" titleEng="CONTACT">
            <div>
              SNSのアカウントは連絡をいただいても反応がないことが多いです。
              <br />
              お仕事の依頼や相談などがあれば、お気軽に以下のメールアドレスよりご連絡ください。
              <br />
              example[at]example.com
            </div>
          </Section>
        </div>
      </ContentArea>
    </div>
  );
}
