import React from "react";
import ResumeItem from "./components/ResumeItem";
import Fade from "react-reveal";
import Footer from "./components/Footer";
import { Container, Button } from "react-bootstrap";

const Resume = () => (
  <div>
  <Container>
  <Fade top>
    <h1>Resume</h1>
    <Button className="custom-btn" href="">
      Download my Resume
    </Button>
   
    </Fade>
    <ResumeItem
      heading="Education"
      title="Stanford University / Expected Graduation: June 2024 "
      subhead="Stanford, CA / 2019 - Present"
    >
      <p>
        B.S. Computer Science (HCI), B.A. Psychology, GPA: 3.8 out of 4.0.{" "}
        <br />
        Organizations: Stanford Women in Design, Tech History Project, The
        Stanford Daily, Stanford Culture & Emotion Lab, Stanford Open Data
        Project, Associated Students of Stanford University, Tech History
        Project
      </p>
    </ResumeItem>
    <hr />
    <ResumeItem
      heading="Experience"
      title="Lenovo / Global eComm Content Operations Intern"
      subhead="Remote / Jan 2021 - Present"
    >
      <p>
        Visualized monthly page traffic data and audited content for the most
        viewed 50,000 pages across 164 countries. Identified and resolved
        compliance risks impacting over 1,300 product ads affecting the China
        Asia-Pacific region. Led and assessed Legion and Workstation global
        product launches. Created motion videos, graphics, and documentation for
        international projects.
      </p>
    </ResumeItem>

    <ResumeItem
      title="U.S. Census Bureau / Civic Digital Fellow (UI/UX)"
      subhead="Remote / June 2020 - Feb 2021"
    >
      <p>
        Redesigned the entire learning management system for the Census Academy,
        a data education site with 40k active visitors. Designed and developed a
        full-stack web application with API integrations, the Census Survey
        Explorer, to break down over 130 Census surveys and programs.
      </p>
    </ResumeItem>

    <ResumeItem
      title="50+1 Strategies / Creative Fellow"
      subhead="Remote / Sep 2020 - Nov 2020"
    >
      <p>
        Pitched, researched, and executed creative strategies and campaigns for
        over 20 local, state, and national clients such as the American Civil
        Liberties Union and Movement for Black Lives.
      </p>
    </ResumeItem>

    <ResumeItem
      title="
      BEAM, Stanford Career Education / Marketing Associate"
      subhead="Remote / Sep 2019 - Present"
    >
      <p>
        Defined creative strategy and marketing for Stanford’s career center,
        translating branding into campaigns for all major career fairs and
        increased social media reach by over 300% in 2020.
      </p>
    </ResumeItem>
  </Container>
  <Footer/>
  </div>
);

export default Resume;
