import type { NextPage } from "next";
import styles from "./frame-component.module.css";

type FrameComponentType = {
  rectangle12?: string;
  seniorElectricalEngineer?: string;
  atOscillaPowerInc?: string;
  rectangle121?: string;
  engineer?: string;
  atJohnsonJohnson?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({
  rectangle12,
  seniorElectricalEngineer,
  atOscillaPowerInc,
  rectangle121,
  engineer,
  atJohnsonJohnson,
}) => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.vectorParent}>
        <img className={styles.instanceChild} alt="" src={rectangle12} />
        <div className={styles.name}>
          <p className={styles.seniorElectricalEngineer}>
            {seniorElectricalEngineer}
          </p>
          <p className={styles.seniorElectricalEngineer}>{atOscillaPowerInc}</p>
        </div>
      </div>
      <div className={styles.vectorGroup}>
        <img className={styles.instanceChild} alt="" src={rectangle121} />
        <div className={styles.name}>
          <p className={styles.seniorElectricalEngineer}>{engineer}</p>
          <p className={styles.seniorElectricalEngineer}>{atJohnsonJohnson}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
