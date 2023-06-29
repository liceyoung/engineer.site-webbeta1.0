import type { NextPage } from "next";
import FrameComponent from "./frame-component";
import styles from "./job-opportunities-section.module.css";
const JobOpportunitiesSection: NextPage = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameParent} data-scroll-to="frameContainer5">
        <div className={styles.frameWrapper}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Job Opportunities</div>
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
      <div className={styles.recentGraduatesPositionsWrapper}>
        <div className={styles.recentGraduatesPositions}>
          Recent graduates’ positions
        </div>
      </div>
      <div className={styles.instanceGroup}>
        <div className={styles.vectorParent}>
         <a href="https://www.jhuapl.edu" style={{ color: 'inherit' }}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-12@2x.png"
          />
          </a>
          <div className={styles.name}>
           <a href="https://www.jhuapl.edu" style={{ color: 'inherit' }}>
            <p className={styles.leadRadiationEngineer}>
              Lead Radiation Engineer
            </p>
            <p className={styles.leadRadiationEngineer}>at the Johns Hopkins</p>
            <p className={styles.leadRadiationEngineer}>
              Applied Physics Laboratory
            </p>
           </a>
          </div>
        </div>
        <div className={styles.vectorGroup}>
         <a href="https://www.tsmc.com/english" style={{ color: 'inherit' }}>
          <img
            className={styles.instanceChild}
            alt=""
            src="/rectangle-121@2x.png"
          />
         </a>
          <div className={styles.name}>
           <a href="https://www.tsmc.com/english" style={{ color: 'inherit' }}>
            <p className={styles.leadRadiationEngineer}>{`R&D engineer`}</p>
            <p className={styles.leadRadiationEngineer}>at TMSC</p>
         </a>
          </div>
        </div>
      </div>
      <div className={styles.instanceContainer}>
       <a href="https://www.oscillapower.com" style={{ color: 'inherit' }}>
         <img className={styles.instanceChild} alt="Senior Electrical Engineer" src="/rectangle-122@2x.png" />
       </a>
       <a href="https://www.oscillapower.com" style={{ color: 'inherit' }}>
         <p className={styles.engineering}>Senior Electrical Engineer at Oscilla Power, Inc</p>
       </a>
       <a href="https://www.jnj.com" style={{ color: 'inherit' }}>
         <img className={styles.instanceChild} alt="Senior Electrical Engineer" src="/rectangle-123@2x.png" />
       </a>
       <a href="https://www.jnj.com" style={{ color: 'inherit' }}> 
         <p className={styles.engineering}>Engineer at Johnson & Johnson</p>
       </a>
       <a href="https://www.intel.com/content/www/us/en/homepage.html" style={{ color: 'inherit' }}>
         <img className={styles.instanceChild} alt="Senior Electrical Engineer" src="/rectangle-124@2x.png" />
       </a>
       <a href="https://www.intel.com/content/www/us/en/homepage.html" style={{ color: 'inherit' }}>
         <p className={styles.engineering}>Calibration Technician at Intel Corporation</p>
       </a>
       <a href="https://www.target.com" style={{ color: 'inherit' }}>
         <img className={styles.instanceChild} alt="engineer" src="/rectangle-125@2x.png" />
       </a>
       <a href="https://www.target.com" style={{ color: 'inherit' }}> 
         <p className={styles.engineering}>Senior Engineer at Target</p>
       </a>
       <a href="https://about.meta.com" style={{ color: 'inherit' }}>
         <img className={styles.instanceChild} alt="seniorElectricalEngineer" src="/rectangle-126@2x.png" />
       </a>
       <a href="https://about.meta.com" style={{ color: 'inherit' }}> 
         <p className={styles.engineering}>Senior Engineering Manage at Facebook</p>
       </a>
       <a href="https://www.tesla.com" style={{ color: 'inherit' }}>
         <img className={styles.instanceChild} alt="Engineering Technician" src="/rectangle-127@2x.png" />
       </a>
       <a href="https://www.tesla.com" style={{ color: 'inherit' }}> 
         <p className={styles.engineering}>Engineering Technician at Tesla</p>
       </a>
       </div>
    </div>
  );
};

export default JobOpportunitiesSection;
