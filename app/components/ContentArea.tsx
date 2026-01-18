import { Link } from "react-router";
import styles from "./contentArea.module.css";
import type { ReactNode } from "react";

interface ContentAreaProps {
  children: ReactNode;
}

const ContentArea = ({ children }: ContentAreaProps) => {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  );
};

export default ContentArea;
