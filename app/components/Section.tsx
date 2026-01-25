import type { ReactNode } from "react";
import { NavLink } from "react-router";
import styles from "./section.module.css";

interface SectionProps {
  title: string; // セクションの見出し
  titleEng: string;
  children: ReactNode; // セクションの内容
}

const Section = ({ title, titleEng, children }: SectionProps) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.Title}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.sectionTitleEng}>{titleEng}</div>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};

export default Section;
