import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

type FrameComponent1Type = {
  rectangle12?: string;
  name1?: string;
  rectangle121?: string;
  name2?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  rectangle12,
  name1,
  rectangle121,
  name2,
}) => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.vectorParent}>
        <img className={styles.instanceChild} alt="" src={rectangle12} />
        <div className={styles.name}>{name1}</div>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.instanceChild} alt="" src={rectangle121} />
        <div className={styles.name}>{name2}</div>
      </div>
    </div>
  );
};

export default FrameComponent1;
