import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

type FrameComponent3Type = {
  textHolder?: string;
  ellipse3?: string;
  rectangle10?: string;
  cELEBMakerLabSparkingCrea?: string;
  collaborationWithStockedT?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  textHolder,
  ellipse3,
  rectangle10,
  cELEBMakerLabSparkingCrea,
  collaborationWithStockedT,
}) => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.textHolderParent}>
        <div className={styles.textHolder}>{textHolder}</div>
        <img className={styles.instanceChild} alt="" src={ellipse3} />
      </div>
      <img className={styles.instanceItem} alt="" src={rectangle10} />
      <div className={styles.placeholderWrapper}>
        <b className={styles.placeholder}>
          <p className={styles.celebMakerLab}>{cELEBMakerLabSparkingCrea}</p>
          <p className={styles.celebMakerLab}>{collaborationWithStockedT}</p>
        </b>
      </div>
    </div>
  );
};

export default FrameComponent3;
