import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./frame-component6.module.css";
const FrameComponent6: NextPage = () => {
  const onOptionContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOptionContainer1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOptionContainer2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOptionContainer3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOptionContainer4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOptionContainer5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.engineeringProgram}>Engineering program</div>
      </div>
      <div className={styles.beloitCollegesEngineeringPWrapper}>
        <div className={styles.beloitCollegesEngineering}>
          Beloit College's Engineering program stands out as a premier choice
          for aspiring engineers, offering a comprehensive curriculum,
          state-of-the-art facilities, and a supportive community.
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.tableOfContentWrapper}>
          <div className={styles.tableOfContent}>Table of content</div>
        </div>
        <div className={styles.optionParent}>
          <div className={styles.option} onClick={onOptionContainer4Click}>
            <div className={styles.optionInner}>
              <img className={styles.frameItem} alt="" src="/vector-34.svg" />
            </div>
            <div className={styles.textHolder}>
              <div className={styles.textHolder1}>Curriculum</div>
            </div>
          </div>
          <div className={styles.option} onClick={onOptionContainer1Click}>
            <div className={styles.optionInner}>
              <img className={styles.frameItem} alt="" src="/vector-31.svg" />
            </div>
            <div className={styles.textHolder}>
              <div className={styles.textHolder1}>Internships</div>
            </div>
          </div>
          <div className={styles.option} onClick={onOptionContainer3Click}>
            <div className={styles.optionInner}>
              <img className={styles.frameItem} alt="" src="/vector-33.svg" />
            </div>
            <div className={styles.textHolder}>
              <div className={styles.textHolder1}>Graduate School</div>
            </div>
          </div>
          <div className={styles.option} onClick={onOptionContainerClick}>
            <div className={styles.optionInner}>
              <img className={styles.frameItem} alt="" src="/vector-3.svg" />
            </div>
            <div className={styles.textHolder}>
              <div className={styles.textHolder1}>Job Opportunities</div>
            </div>
          </div>
          <div className={styles.option2} onClick={onOptionContainer2Click}>
            <div className={styles.frameDiv}>
              <img className={styles.frameItem} alt="" src="/vector-32.svg" />
            </div>
            <div className={styles.textHolder}>
              <div className={styles.textHolder1}>{`Research `}</div>
            </div>
          </div>
          <div className={styles.option} onClick={onOptionContainer5Click}>
            <div className={styles.optionInner}>
              <img className={styles.frameItem} alt="" src="/vector-3.svg" />
            </div>
            <div className={styles.textHolder}>
              <div className={styles.textHolder1}>Mentorship</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
