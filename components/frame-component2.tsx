import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

type FrameComponent2Type = {
  rectangle11?: string;
  name1?: string;
  rectangle111?: string;
  name2?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({
  rectangle11,
  name1,
  rectangle111,
  name2,
}) => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.rectangleParent}>
        <img className={styles.instanceChild} alt="" src={rectangle11} />
        <div className={styles.name}>{name1}</div>
      </div>
      <div className={styles.rectangleParent}>
        <img className={styles.instanceChild} alt="" src={rectangle111} />
        <div className={styles.name}>{name2}</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
