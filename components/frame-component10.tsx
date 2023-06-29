import type { NextPage } from "next";
import styles from "./frame-component10.module.css";
const FrameComponent10: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent} data-scroll-to="frameContainer2">
        <div className={styles.frameWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Graduate schools</div>
          </div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
          <div className={styles.loremIpsumDolor}>
            Beloit College propels students towards top graduate schools by
            offering rigorous curriculum, research opportunities, faculty
            mentorship, and personalized guidance.
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.alumnisGraduateSchoolsWrapper}>
        <div className={styles.alumnisGraduateSchools}>
          Alumni’s Graduate Schools
        </div>
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.vectorParent}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-1218@2x.png"
          />
          <div className={styles.name}>
           <a href="https://www.wisc.edu" style={{ color: 'inherit' }}>
            <p className={styles.universityOf}>{`University of `}</p>
            <p className={styles.universityOf}>Wisconsin-Madison</p>
           </a>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-1219@2x.png"
          />
          <div className={styles.name}>
            <a href="https://duke.edu " style={{ color: 'inherit' }}> 
             <p>Duke University</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.vectorParent}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-1220@2x.png"
          />
          <div className={styles.name}>
          <a href="https://www.columbia.edu" style={{ color: 'inherit' }}> Columbia University </a>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-1221@2x.png"
          />
          <div className={styles.name}>
          <a href="https://www.wisc.edu" style={{ color: 'inherit' }}>
            <p className={styles.universityOf}>Washington University</p>
            <p className={styles.universityOf}>in St.Louis</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
    </div>
  );
};

export default FrameComponent10;
