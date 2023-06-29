import type { NextPage } from "next";
import styles from "./frame-component11.module.css";
const FrameComponent11: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent} data-scroll-to="frameContainer1">
        <div className={styles.frameWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}> Curriculum</div>
          </div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
          <div className={styles.loremIpsumDolor}>
            Engineering foundation courses with space for liberal arts
            exploration.
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.instanceContainer}>
         <a href="https://www.beloit.edu/academics/engineering/engineering-physics-major/">
          <img className={styles.instanceChild} alt="" src="/ellipse-3.svg" />
         </a>
          <div className={styles.textHolder}>
            <p className={styles.engineering}>
             <a href="https://www.beloit.edu/academics/engineering/engineering-physics-major/" className={styles.link}>Engineering Physics Majors</a>
            </p>
          </div>
        </div>
        <div className={styles.instanceContainer}>
         <a href=" https://www.beloit.edu/academics/engineering/requirements/">
          <img className={styles.instanceChild} alt="" src="/ellipse-31.svg" />
         </a>
          <div className={styles.textHolder}>
            <p className={styles.engineering}>
             <a href=" https://www.beloit.edu/academics/engineering/requirements/" className={styles.link}>3-2 Engineering</a> 
            </p>
            <p className={styles.engineering}>
             <a href=" https://www.beloit.edu/academics/engineering/requirements/" className={styles.link}>Program</a> 
            </p>
          </div>
        </div>
        <div className={styles.instanceContainer}>
         <a href=" https://www.beloit.edu/academics/engineering/3-2-4-2-programs/">
          <img className={styles.instanceChild} alt="" src="/ellipse-32.svg" />
         </a>
          <div className={styles.textHolder}>
            <p className={styles.engineering}>
             <a href=" https://www.beloit.edu/academics/engineering/3-2-4-2-programs/" className={styles.link}>4-2 Engineering</a>
            </p>
            <p className={styles.engineering}>
             <a href=" https://www.beloit.edu/academics/engineering/3-2-4-2-programs/" className={styles.link}>Program</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
