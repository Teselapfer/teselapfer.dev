import type { Route } from "./+types/feature";
import ContentArea from "~/components/ContentArea";
import Section from "~/components/Section";
import styles from "./feature.module.css";
import { NavLink } from "react-router";

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
            現在、このページは制作中です。
            <br />
            公開までもうしばらくお待ちください。
          </div>

          <div className={styles.linkWrapper}>
            <NavLink to={"/"} className={styles.link}>
              ← トップページへ戻る
            </NavLink>
          </div>
        </div>
      </ContentArea>
    </div>
  );
}
