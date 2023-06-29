import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";
import styles from "./internship-section.module.css";
const InternshipSection: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent} data-scroll-to="frameContainer4">
        <div className={styles.frameWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Internships</div>
          </div>
        </div>
        <div className={styles.loremIpsumDolorSitAmetCoWrapper}>
          <div
            className={styles.loremIpsumDolor}
          >{`Embark on an engineering journey at Beloit College, where boundless job opportunities await. `}</div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <div className={styles.frameChild} />
      </div>
       <div className={styles.instanceContainer}>
       <a href="https://www.abbott.com">
         <img className={styles.instanceChild} alt="Abbott Laboratories" src="/rectangle-128@2x.png" />
       </a>
       <a href="https://www.abbott.com" style={{ color: 'inherit' }}>
         <p className={styles.engineering}>Abbott Laboratories</p>
       </a>
       <a href="https://www.liveline.tech">
       <img className={styles.instanceChild} alt="Liveline Technologies" src="/rectangle-129@2x.png" />
       </a>
       <a href="https://www.liveline.tech"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Liveline Technologies</p>
       </a>
       </div>
       <div className={styles.instanceContainer}></div>
       <a href="https://www.cooperstandard.com">
       <img className={styles.instanceChild} alt="Cooper Standard" src="/rectangle-1210@2x.png" />
       </a>
       <a href="https://www.cooperstandard.com"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Cooper Standard</p>
       </a>
       <a href="https://www.fnal.gov">
       <img className={styles.instanceChild} alt="Fermilab" src="/rectangle-1211@2x.png" />
       </a>
       <a href="https://www.fnal.gov"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Fermilab</p>
       </a>
       <a href="hhttp://www.blazetech.com">
       <img className={styles.instanceChild} alt="Blazetech Corp" src="/rectangle-1212@2x.png" />
       </a>
       <a href="http://www.blazetech.com"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Blazetech Corp</p>
       </a>
       <a href="https://www.bourns.com">
       <img className={styles.instanceChild} alt="Bourns, Inc." src="/rectangle-1213@2x.png" />
       </a>
       <a href="https://www.bourns.com"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Bourns, Inc.</p>
       </a>
       <a href="https://www.mansonconstruction.com">
       <img className={styles.instanceChild} alt="Manson Construction Co." src="/rectangle-1214@2x.png" />
       </a>
       <a href="https://www.mansonconstruction.com"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Manson Construction Co.</p>
       </a>
       <a href="https://www.conagrabrands.com">
       <img className={styles.instanceChild} alt="Conagra Brands" src="/rectangle-1215@2x.png" />
       </a>
       <a href="https://www.conagrabrands.com"style={{ color: 'inherit' }}>
       <p className={styles.engineering}>Conagra Brands</p>
       </a>

       </div>
  );
};

export default InternshipSection;
