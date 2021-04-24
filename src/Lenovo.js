import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import PortfolioHero from "./components/PortfolioHero";
import ColGroup from "./components/ColGroup";
import Figure from "./components/Figure";
import PortfolioItem from "./components/PortfolioItem";
import SecondaryItem from "./components/SecondaryItem";
import Fade from "react-reveal/Fade";
import LenovoHeader from "./images/PortfolioHeaders/Lenovo.png";
import Process from "./images/Lenovo/ProcessSlide.png";
import Goals from "./images/Lenovo/GoalsSlide.png";

const Lenovo = () => (
  <div>
    <Container>
      <Fade bottom>
        <PortfolioHero
          PortfolioLink="lenovo"
          ImageLink={LenovoHeader}
          ImageAlt="Description"
          Headline="Lenovo"
          Subheader="Researching and analyzing user behavior, page traffic, and content for the Worldwide eCommerce team."
          Overview="Lenovo's Worldwide eCommerce team wanted to better 
          understand our eCommerce page content and traffic. 
          I was tasked with auditing our global page traffic across Lenovo.com and gave presentations
          to content leaders in our WW eCommerce teams as a result. Due to my non-discloure agreement, I can only discuss my work at a high-level. Please feel free to contact me to learn more!"
        />
        <Row>
          <ColGroup title="Team" num="3">
            <li>Independent intern project</li>
          </ColGroup>

          <ColGroup title="Role" num="3">
            <li>Global eComm Content Operations Intern</li>
          </ColGroup>

          <ColGroup title="Tools">
            <li>Adobe Analytics</li>
            <li>Python</li>
            <li>Jupyter Notebook</li>
            <li>Plotly</li>
            <li>Dash</li>
          </ColGroup>
          <ColGroup title="Time">
            <li>February 2021 - Present</li>
            <li>2 months</li>
          </ColGroup>
        </Row>
        <Row>
          <Col>
            <PortfolioItem
              headline="Scope"
              text="I examined page traffic across 164 countries by segment and brand. 
              I also identified areas for improvement for Lenovo.com looking at data from the top 50,000 pages each month 
              over the last year."
            />

            <Figure
              ImageLink={Goals}
              ImageAlt="1. Examine relationships between page traffic and countries​

              2. Analyze trends around high traffic pages​
              
              3. Identify high traffic pages marked for improvement ​
              
              4. Demonstrate the impact of low traffic redirects on Lenovo.com​
              
              5. Build dashboards to compare pages, categories, and countries on performance​."
              ImageNum="1"
              ImageCaption="A slide describing goals from my project discussed in my deck."
            />

            <SecondaryItem
              headline="Process"
              text="I wrote a script to clean and process data pulled from Adobe Analytics using Python. Using 
              Plotly, Dash, and Tableau, I created dashboards visualizing and predicting key trends and risks.
              I then was able to present to my team and share key insights!
              "
            />

            <Figure
              ImageLink={Process}
              ImageAlt="1. Pull data from Adobe Experience Cloud​
              Pulled over 600k data points from AEM to create this project!​
              2. Clean, combine and refine datasets​
              Data cleaning using Python to optimize and clean datasets​. 
              3. Explore datasets​
              Look at different views and models for organizing data visualizations​. 
              4. Analyze Trends​
              Model trends in data and build visualizations​.
              5. Predict and Review​
              Use data models to give this presentation and suggest potential fixes​.
              6. Future steps​
              Build on suggestions to improve page content and traffic​."
              ImageNum="2"
              ImageCaption="A slide on my Data Analysis Process from my deck."
            />

            <PortfolioItem
              headline="Takeaways"
              text="My time at Lenovo is still ongoing – I'll be back with more to share! From my experiences so far, I've learned
              how data can tell stories, influence global market changes, and predict the future! I've also gotten much, much better 
              at Adobe Analytics over the last two months (that data doesn't pull itself!)"
            />
            <SecondaryItem
              headline="Shoutouts"
              text="Special thanks to Richard Moyles, Samantha Perillo, Sean O'Leary, Alex Leopold, and Laura McHugh for their guidance and constant support through my internship so far at Lenovo."
            />
          </Col>
        </Row>
      </Fade>
    </Container>
    <Footer />
  </div>
);

export default Lenovo;
