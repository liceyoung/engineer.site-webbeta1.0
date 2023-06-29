import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";
import FrameComponent2 from "./frame-component2";
import FrameComponent4 from "./frame-component4";
import styles from "./frame-component12.module.css";
const FrameComponent12: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent} data-scroll-to="frameContainer">
        <div className={styles.frameWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}> 
             <a href="https://www.beloit.edu/academics/engineering/resources-opportunities/" className={styles.link}> Mentorship</a>
            </div>
          </div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
          <div className={styles.loremIpsumDolorContainer}>
            <span>{`Beloit College's engineering mentorship program provides students with a dynamic `}</span>
            <span className={styles.celebMakerLab}>CELEB Maker Lab</span>
            <span>{`, diverse `}</span>
            <span className={styles.celebMakerLab}>Career Channels,</span>
            <span>{` and `}</span>
            <span className={styles.celebMakerLab}>{`Study Abroad `}</span>
            <span>
              options. It equips our students them with practical skills,
              fosters innovation, and preparing students for successful
              engineering careers.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.instanceGroup}>
            <FrameComponent3
              textHolder="CELEB Maker Lab"
              ellipse3="/ellipse-33.svg"
              rectangle10="/rectangle-10@2x.png"
              cELEBMakerLabSparkingCrea="CELEB Maker Lab: Sparking creativity and "
              collaborationWithStockedT="collaboration with stocked tools and equipment."
            />
            <div className={styles.loremIpsumDolorSitAmetCoContainer}>
              <div className={styles.loremIpsumDolorContainer1}>
                <p className={styles.sparkingCreativityAndCollab}>
                  <span>
                    <span>
                      Sparking creativity and collaboration with stocked tools
                      and equipment.
                    </span>
                  </span>
                </p>
                <p className={styles.sparkingCreativityAndCollab}>
                  <span>
                    <span className={styles.blankLine1}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.learnMore}>
                  <span>
                    <span className={styles.learnMore1}>
                     <a href="https://www.beloit.edu/celeb/maker-lab/" className={styles.link}>Learn more about the CELEB Maker Lab </a>
                    </span>
                    {` >`}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.instanceContainer}>
            <div className={styles.loremIpsumDolorSitAmetCoFrame}>
              <div className={styles.loremIpsumDolorContainer1}>
                <p className={styles.sparkingCreativityAndCollab}>
                  <span className={styles.ignitingStudentCreativityAn1}>
                    <span className={styles.ignitingStudentCreativity}>
                      Igniting student creativity and collaboration for future
                      career success.
                    </span>
                  </span>
                </p>
                <p className={styles.sparkingCreativityAndCollab}>
                  <span className={styles.ignitingStudentCreativityAn1}>
                    <span className={styles.blankLine4}>&nbsp;</span>
                  </span>
                </p>
                <p className={styles.sparkingCreativityAndCollab}>
                  <span className={styles.span}>{`< `}</span>
                  <span className={styles.span}>
                    <span className={styles.learnMore1}>
                    <a href="https://www.beloit.edu/channels/" className={styles.link}>Learn more about the Career Channels</a>
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.instanceParent1}>
                <img
                  className={styles.instanceChild}
                  alt=""
                  src="/ellipse-34.svg"
                />
                <div className={styles.textHolder}>Career Channels</div>
              </div>
              <img
                className={styles.instanceItem}
                alt=""
                src="/rectangle-101@2x.png"
              />
            </div>
          </div>
          <div className={styles.instanceParent2}>
            <FrameComponent3
              textHolder="Study Abroad"
              ellipse3="/ellipse-35.svg"
              rectangle10="/rectangle-102@2x.png"
              cELEBMakerLabSparkingCrea="Study Abroad: Broadening horizons and"
              collaborationWithStockedT="academic experiences through cultural immersion."
            />
            <div className={styles.broadeningHorizonsAndContainer}>
              <p className={styles.sparkingCreativityAndCollab}>
                <span>
                  <span>
                    Broadening horizons and enriching academic experiences
                    through specialized courses and cultural immersion.
                  </span>
                </span>
              </p>
              <p className={styles.sparkingCreativityAndCollab}>
                <span>
                  <span className={styles.blankLine1}>&nbsp;</span>
                </span>
              </p>
              <p className={styles.learnMore}>
                <span>
                  <span className={styles.learnMore1}>
                  <a href="https://www.beloit.edu/offices/global-experience/study-abroad/semester-abroad/where-to-go/" className={styles.link}>Learn more about the Study Abroad</a>
                  </span>
                  {` >`}
                </span>
              </p>
            </div>
          </div>
        </div>
        <img className={styles.frameItem} alt="" src="/vector-4.svg" />
      </div>
      <div className={styles.facultyWrapper}>
        <div className={styles.faculty}>Faculty</div>
      </div>
      <FrameComponent2
        rectangle11="/rectangle-11@2x.png"
        name1="Britt Scharringhausen"
        rectangle111="/rectangle-111@2x.png"
        name2="Eyad Haj Said"
      />
      <FrameComponent2
        rectangle11="/rectangle-112@2x.png"
        name1="Brian Morello"
        rectangle111="/rectangle-113@2x.png"
        name2="Michael Fortner"
      />
      <FrameComponent4 rectangle11="/rectangle-114@2x.png" />
      <div className={styles.facultyWrapper}>
        <div className={styles.faculty}>Staff</div>
      </div>
      <FrameComponent4 rectangle11="/rectangle-115@2x.png" />
    </div>
  );
};

export default FrameComponent12;
