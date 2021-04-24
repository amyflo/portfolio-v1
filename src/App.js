import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PortfolioCard from "./components/PortfolioCard";
import CensusAcademy from "./images/PortfolioHeaders/CensusAcademy.png";
import FiftyPlusOne from "./images/PortfolioHeaders/50+1.png";
import CensusSurveyExplorer from "./images/PortfolioHeaders/CensusSurveyExplorer.png";
import Lenovo from "./images/PortfolioHeaders/Lenovo.png";
import OpenDataCampus from "./images/PortfolioHeaders/OpenDataCampus.png";

const App = () => (
  <div>
    <Hero
      ImageLink="https://via.placeholder.com/720x300"
      ButtonLink="https://calendly.com/amyflo/checkin"
    />
    <main>
      <Container>
        <PortfolioCard
          PortfolioLink="lenovo"
          ImageLink={Lenovo}
          ImageAlt="Lenovo logo on sunset like gradient background."
          Headline="Lenovo: Content Audit Project"
          Subheader="Researching and analyzing user behavior, page traffic, and content for the Worldwide eCommerce team."
          Text="Data visualization, Data modeling, Page traffic analytics"
        />

        <PortfolioCard
          PortfolioLink="censusacademy"
          ImageLink={CensusAcademy}
          ImageAlt="Census Academy mockup on an iPad next to Census Bureau and Coding it Forward logo."
          Headline="Civic Digital Fellowship: Census Academy"
          Subheader="Envisioning data education courses for the Census Academy team with the U.S. Census Bureau and Coding it Forward."
          Text="UX Design, UX Research"
        />
        <PortfolioCard
          PortfolioLink=""
          ImageLink={CensusSurveyExplorer}
          ImageAlt="Description"
          Headline="U.S. Census Bureau: Census Survey Explorer"
          Subheader="I built a web application to help data users find 130+ U.S. Census Bureau surveys and programs."
          Text="UI Design, Full-stack web development, API Integration"
        />
       
        <PortfolioCard
          PortfolioLink=""
          ImageLink={OpenDataCampus}
          ImageAlt="Description"
          Headline="Open Data Campus"
          Subheader="I designed and coded a website about open data for college students."
          Text="UI Design, Front-end development"
        />
        <PortfolioCard
          PortfolioLink=""
          ImageLink={FiftyPlusOne}
          ImageAlt="Description"
          Headline="50+1 Strategies"
          Subheader="Creating for 20+ local, state, and national political campaigns."
          Text="Branding design, Content design, Campaign strategy"
        />
      </Container>
      <Footer />
    </main>
  </div>
);

export default App;
