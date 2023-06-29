import type { NextPage } from "next";
import styles from "./frame-component9.module.css";
const FrameComponent9: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent} data-scroll-to="frameContainer3">
        <div className={styles.frameWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Research</div>
          </div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
          <div className={styles.loremIpsumDolor}>
            Beloit College empowers students to engage in impactful research
            projects under the guidance of faculty mentors, fostering critical
            thinking, discovery, and innovation.
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.vectorParent}>
         <a href="https://www.nsf.gov/crssprgm/reu/" style={{ color: 'inherit' }}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-1216@2x.png"
          />
          </a>
          <div className={styles.name}>
           <a href="https://www.nsf.gov/crssprgm/reu/" style={{ color: 'inherit' }}>
            <p className={styles.reusAtResearch}>REUs at research</p>
            <p className={styles.reusAtResearch}>{`labs & universities`}</p>
           </a>
          </div>
        </div>
        <div className={styles.vectorParent}>
         <a href="https://www.beloit.edu/academics/biology/resources-opportunities/summer-research/" style={{ color: 'inherit' }}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-1217@2x.png"
          />
          </a>
          <div className={styles.name}>
           <a href="https://www.beloit.edu/academics/biology/resources-opportunities/summer-research/" style={{ color: 'inherit' }}>
            <p className={styles.reusAtResearch}>{`Faculty-mentored `}</p>
            <p className={styles.reusAtResearch}>research at</p>
            <p className={styles.reusAtResearch}>Beloit Colege</p>
           </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent9;
