import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

type FrameComponent4Type = {
  rectangle11?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ rectangle11 }) => {
  return (
    <div className={styles.instanceWrapper}>
      <div className={styles.rectangleParent}>
        <img className={styles.instanceChild} alt="" src={rectangle11} />
        <div className={styles.name}>Patrick Polley</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
