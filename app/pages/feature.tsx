import type { Route } from "./+types/feature";
import ContentArea from "~/components/ContentArea";
import Section from "~/components/Section";
import styles from "./feature.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teselapfer Portfolio | Feature" },
    { name: "description", content: "What's new" },
  ];
}

export default function Feature() {
  return (
    <div>
      <ContentArea>
        <div className={styles.feature}>
          <div className={styles.head}>Feature</div>
          <div className={styles.description}>
            このサイトに関する情報をまとめています。
          </div>

          <Section title="更新履歴" titleEng="HISTORY">
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
        </div>
      </ContentArea>
    </div>
  );
}
