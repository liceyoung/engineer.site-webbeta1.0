import type { NextPage } from "next";
import Header from "../components/header";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent11 from "../components/frame-component11";
import InternshipSection from "../components/internship-section";
import FrameComponent10 from "../components/frame-component10";
import JobOpportunitiesSection from "../components/job-opportunities-section";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent12 from "../components/frame-component12";
import styles from "./index.module.css";
const Engineering: NextPage = () => {
  return (
    <div className={styles.engineering}>
      <Header />
      <FrameComponent6 />
      <FrameComponent11 />
      <InternshipSection />
      <FrameComponent10 />
      <JobOpportunitiesSection />
      <FrameComponent9 />
      <FrameComponent12 />
    </div>
  );
};

export default Engineering;
