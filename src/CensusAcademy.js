import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import PortfolioHero from "./components/PortfolioHero";
import ColGroup from "./components/ColGroup";
import Figure from "./components/Figure";
import PortfolioItem from "./components/PortfolioItem";
import SecondaryItem from "./components/SecondaryItem";
import Blockquote from "./components/Blockquote";
import Data from "./components/Data";
import Fade from "react-reveal/Fade";
import CensusAcademyHeader from "./images/PortfolioHeaders/CensusAcademy.png";
import OldSite from "./images/CensusAcademy/user_flow.gif";
import UserJourney from "./images/CensusAcademy/Census Academy - User Journey.jpg";
import UserFlow from "./images/CensusAcademy/Census Academy - User Flow.jpg";
import Mockup1 from "./images/CensusAcademy/mockup1.png";
import Mockup2 from "./images/CensusAcademy/mockup2.gif";
import Mockup3 from "./images/CensusAcademy/mockup3.jpg";
import CompetitiveAnalysis from "./images/CensusAcademy/Census Academy - Competitive Analysis.jpg";
import CourseDiscovery from "./images/CensusAcademy/Census Academy - Course Discovery.jpg";
import CourseCompletion from "./images/CensusAcademy/Census Academy - Course Completion.jpg";
import TakingCourse from "./images/CensusAcademy/Census Academy - Taking the course.jpg";
import CourseMods from "./images/CensusAcademy/Census Academy - Course Modules.jpg";
import Cards from "./images/CensusAcademy/Census Academy - Cards.jpg";
import Overview from "./images/CensusAcademy/Census Academy - Course Overview.jpg";
import CoursePage from "./images/CensusAcademy/Census Academy - Course Page.jpg";
import Dashboard from "./images/CensusAcademy/Census Academy - Dashboard.jpg";

const CensusAcademy = () => (
  <div>
    <Container>
      <Fade bottom>
        <PortfolioHero
          PortfolioLink="censusacademy"
          ImageLink={CensusAcademyHeader}
          ImageAlt="Census Academy mockup on an iPad next to Census Bureau and Coding it Forward logo."
          Headline="Civic Digital Fellowship: Census Academy"
          Subheader="Envisioning data education courses for the Census Academy team with the U.S. Census Bureau and Coding it Forward."
          Overview="The Census Bureau was struggling with helping small businesses understand complex data tools and methods. The lack of structured, digestible courses left small businesses overwhelmed when trying to learn new tools that could help them understand their markets and withstand pressures faced by COVID-19.
          Through my Civic Digital Fellowship with Coding it Forward, I designed a new approach to data skills courses for the Census Academy tea.
          "
        />
        <Row>
          <ColGroup title="Team" md="12" lg="3">
            <li>Amy Lo</li>
            <li>Elliott Tran</li>
            <li>Alexandra Barker</li>
            <li>Mary Leisenring</li>
            <li>Anthony Calabrese</li>
          </ColGroup>

          <ColGroup title="Role" md="12" lg="3">
            <li>UX Design</li>
            <li>User Research</li>
            <li>Information Architecture</li>
            <li>Competitive Analysis</li>
          </ColGroup>

          <ColGroup title="Tools" md="12" lg="3">
            <li>Sketch</li>
            <li>InVision</li>
            <li>Miro</li>
            <li>U.S. Web Design System</li>
          </ColGroup>
          <ColGroup title="Time" md="12" lg="3">
            <li>June 2020 - August 2020</li>
            <li>10 weeks</li>
          </ColGroup>
        </Row>
        <section>
          <Row>
            <Col>
              <Figure ImageLink={Mockup1} ImageAlt="Mockup of UI/UX Census Academy project on multiple devices." />
              <Figure ImageLink={Mockup2} ImageAlt="Gif animation of screenshots from Census Academy project." />
              <PortfolioItem
                headline="Problem"
                text="My team wanted to create more engaging online courses geared toward small businesses. While we had a few courses available on the website, they existed only as text and embedded YouTube videos. We wanted to teach users in a more interactive way and build a better infrastructure for a learning management system.               "
              />
              <SecondaryItem
                headline="Examining the old flow"
                text="Here is how a user selects and takes a course through Census Academy."
              />
              <Figure
                ImageLink={OldSite}
                ImageAlt="Gif animation of scroll through the Census Academy website's courses"
                ImageNum="2"
                ImageCaption="Notice how text-heavy this is! Definitely not inviting enough..."
              />
              <SecondaryItem
                headline="Too much burden on the user"
                text="Our target users were small business owners impacted by COVID-19. There were 
              multiple pain points throughout the process of discovering, selecting, and taking a 
              course it that created friction in the learning process."
              />
              <Figure
                ImageLink={UserJourney}
                ImageAlt="User Journey diagram going through the pain points in the site."
                ImageNum="3"
                ImageCaption="The current user experience created friction at multiple points in the process for a potential student."
              />
              <PortfolioItem
                headline="Research"
                text="Before we jumped into designing, we wanted to understand the impact of 
              COVID-19 on small businesses and how they use our data tools to make business decisions. 
              Luckily, data is not hard to find here at the Census!"
              />
              <SecondaryItem
                headline="The pandemic poses a threat to small businesses"
                text="Any design solution we created had to reduce the barriers to entry for
              our users, who already had high stress and pressure from the pandemic."
              />
              <Blockquote
                quote="[COVID-19] was affecting our business in March 
              and dropped our business by about 70%... If we have a 
              second wave, I'm concerned that not just myself, but 
              many of my peers will be in a very challenging position."
                source="- Participant 1"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Data
                number="77.4%"
                text="of businesses nationwide have been negatively affected by the COVID-19 pandemic"
                source="- Small Business Pulse Survey"
              />
            </Col>
            <Col>
              <Data
                number="30.3%"
                text="of businesses have had a large negative effect by the COVID-19
              pandemic"
                source="- Small Business Pulse Survey"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SecondaryItem
                headline="Small businesses and data solutions go hand in hand"
                text="We also researched the existing data landscape for small businesses. 
        When used effectively, data can be extremely powerful for finding new customer 
        leads, measuring sales, and understanding a local market."
              />
              <Blockquote
                quote="[Before the pandemic] we started working with a bunch of people who've 
        essentially gone out of business, like brick and mortar stores. Most of them 
        are non-existent. Our future was always going to be online."
                source="- Participant 3"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Data
                number="67%"
                text="of small businesses are spending more than $10K a year on analytics"
                source="- Small Business Trends"
              />
            </Col>
            <Col>
              <Data
                number="83%"
                text="of user research participants rely on data analytic tools to make business decisions"
                source="- Results from our user testing"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Despite these benefits, there is a high barrier to entry for
                using data. Through our user interviews, we learned there were
                two common reasons why: data tools were 1) expensive and 2)
                difficult to use.
              </p>
              <p>
                The Census Bureau already offers{" "}
                <a
                  className="textLink"
                  href="https://www.census.gov/topics/business-economy/small-business/data/data-tools.html"
                >
                  11 free data tools
                </a>{" "}
                that cater to small businesses. Our goal was to make them easier
                to learn.
              </p>
              <SecondaryItem
                headline="Understanding the existing data education market"
                text="We examined how competitors in the e-learning space structured 
              their courses to support interactive learning in a competitive analysis. 
              We learned that a successful online course prioritizes user retention 
              through a gamified approach to learning, using quizzes and rewards. 
              This was an important consideration for us as we started to design and test."
              />
              <Figure
                ImageLink={CompetitiveAnalysis}
                ImageAlt="Table representing features shared by four e-learning websites."
                ImageNum="4"
                ImageCaption="Snippet of competitive analysis across Khan Academy, CodeAcademy, Coursera, and Datacamp."
              />
            </Col>
          </Row>
        </section>
        <section>
          <Row>
            <Col>
              <PortfolioItem
                headline="User Flow"
                text="To revise the user flow, I tackled three parts of the old flow: 1) Course discovery, 2) Taking the course, and 3) Course Completion. "
              />

              <SecondaryItem
                headline="Looking at the old flow"
                text="Each course exists as one long webpage with several embedded YouTube videos. Because there is no interaction with the user on the site, there is no incentive for a user to learn through the Census Academy courses. Even if a user does complete the course, there is no way of documenting their learning or measuring whether or not they have learned the material. "
              />

              <Figure
                ImageLink={UserFlow}
                ImageAlt="User flow diagram going through Course Discovery, Taking the Course, and Course Completion."
                ImageNum="5"
                ImageCaption="User flow diagram showing the paths possible in the Census Academy website."
              />

              <SecondaryItem
                headline="New flow: Course Discovery"
                text="For the course discovery, we wanted to create a dashboard where users could save, resume, and get recommended courses. We introduced this to help present any cognitive overload that a user might face when looking for a course."
              />

              <Figure
                ImageLink={CourseDiscovery}
                ImageAlt="User flow diagramm showing course discovery."
                ImageNum="6"
                ImageCaption="User flow diagramm showing course discovery."
              />

              <SecondaryItem
                headline="New flow: Taking the Course"
                text="Previously, taking a course meant that a user would watch several YouTube videos. We introduced questions and activities into the user flow in order to help users retain the material as they go through the course. This also works with our idea of a dashboard – thereby allowing people to resume a course for later and keep track of their progress."
              />

              <Figure
                ImageLink={TakingCourse}
                ImageAlt="User flow diagram showing taking the course."
                ImageNum="7"
                ImageCaption="User flow diagram showing taking the course"
              />

              <SecondaryItem
                headline="New flow: Course Completion"
                text="At the end of a course, we wanted a way for users to feel valued and incentivized to complete more courses. We added rewards like badges and certifications for completion, and redirected users back to the dashboard afterward where they can discover more courses to take."
              />

              <Figure
                ImageLink={CourseCompletion}
                ImageAlt="User flow diagram showing course completion."
                ImageNum="8"
                ImageCaption="User flow diagram showing course completion."
              />
            </Col>
          </Row>
        </section>
        <section>
          <PortfolioItem headline="Prototype: Course Discovery" />
          <SecondaryItem
            headline="Combining topics and courses into one page"
            text="The Census Academy website has a Courses page as well as resource pages for each of its six topics. As a designer, I decided to restructure the topics page to include the courses with the option to toggle between the icons to change topics."
          />
          <Figure
            ImageLink={CoursePage}
            ImageAlt="Three screenshots of course, resource, and final design."
            ImageNum="9"
            ImageCaption="Combining the course and resource page into the final design."
          />
          <p>
            <b>Design cues:</b> The icons used in the redesigned course topic
            pages are consistent across the Census Bureau. I decided to
            reinforce those brand icons so users familiar with other Census
            websites would easily understand where they are.
          </p>
          <p>
            <b>Efficient workflow:</b> The Census Academy had a small team and
            maintaining the site was already a challenge. By combining these
            pages into one, it would make it easier and more efficient for the
            content manager on the team to update the website.
          </p>
          <SecondaryItem
            headline="New layout for course cards"
            text="One of the flaws with the old card design was that there wasn’t enough information to understand the course. Furthermore, the tag (“Research” on the leftmost card) categorizing the courses would often obscure the course image or blend into darker images. "
          />
          <Figure
            ImageLink={Cards}
            ImageAlt="Previous card, course card, and final card for recommendations."
            ImageNum="10"
            ImageCaption="Final drafts of course cards designed as reusable components."
          />
          <p>
            <b>Course Card design:</b> I gave more white space to the card and
            emphasized relevant information in the new course card design to
            make it easier for users at a glance to read. I also added the
            description for each course into the card layout so that a user
            would not have to open each page to know what each course covers.
          </p>
          <p>
            <b>Course recommendations:</b> I suggested a new card layout that
            would give recommendations to users on courses they should take. As
            a reusable component, this card could be used throughout the site,
            offering a new selection for users who may be struggling to pick a
            course. Users can also rate the recommendation quality, helping the
            team to better recommend courses in the future.
          </p>

          <SecondaryItem
            headline="Course overview"
            text="Previously, looking at the course description was extremely text-heavy and deterred users from diving into the content."
          />

          <Figure
            ImageLink={Overview}
            ImageAlt="Two screenshots showing the redesign of the course overview page."
            ImageNum="11"
            ImageCaption="Introducing a lot more color and visual segmentation in the new design."
          />
          <p>
            <b>Prevent information overload:</b> I broke down the content into
            more manageable sections which would allow a user to get information
            about the course at a quick glance through the hero section, but
            still scroll down to read more if they were interested.
          </p>
          <p>
            <b>Save for later:</b> Adding an option to save for later would be a
            useful feature for users who might want to take a course in the
            future. This also integrated with our dashboard idea, so users would
            be compelled to create accounts in order to access what they’ve
            saved.
          </p>
        </section>
        <section>
          <PortfolioItem
            headline="Prototype: Takinng the Course"
            text="We envisioned more interactivity in future courses through quizzes."
          />
          <SecondaryItem headline="Video and quizzes" />
          <Figure
            ImageLink={CourseMods}
            ImageAlt="Four screenshots of previous course, video, knowledge check with sidebar, and knowledge check without sidebar."
            ImageNum="12"
            ImageCaption="Sequence for going through the course is a lot easier to digest!"
          />
          <p>
            <b>Collapsible Sidebar: </b> With the sidebar, a user can easily
            find where they are in a course and revisit a module that they have
            already learned.
          </p>
          <p>
            <b>Video and Knowledge Checks: </b> Users can learn through video,
            and quiz questions that would allow for a more diverse curriculum
            design.
          </p>
          <p>
            <b>Learning reinforcement: </b> We reused alert banners from the
            USWDS as an answer checker so that users can easily get feedback on
            how they did so far.
          </p>
        </section>

        <section>
          <PortfolioItem
            headline="Prototype: Course Completion"
            text="We wanted to retain users even after they finished courses."
          />
          <SecondaryItem headline="Rewards and inccentives" />
          <Figure
            ImageLink={Dashboard}
            ImageAlt="Screenshot showing rewards and certification and dashboard."
            ImageNum="13"
            ImageCaption="When completing a course, you're automatically brought to the dashboard to nudge you to take more courses."
          />
          <p>
            <b>Reward system:</b> Badges were a way to help us easily reward
            users with short-term gratification and gamify the online courses to
            make them more personal. This was something that was important to
            our Census Academy team, as we ideated on how we could leverage
            badges as a marketing opportunity. For example, the more badges you
            have, the more exclusive access into training, webinars, or
            business-related events that you have.
          </p>
          <p>
            <b>Certification: </b> Certification can be really powerful for
            small businesses in demonstrating their expertise if in a
            data-adjacent field. We wanted to give this option as a way for
            small businesses to offer more advanced training for employees if
            needed.
          </p>
          <p>
            <b>Track learning and Recommendations: </b> The dashboard is where
            users can resume courses at will, taking into account the often busy
            schedule of small businesses. Through the dashboard, users can also
            get suggestions on courses that they should take using the card
            layout designed for course discovery.
          </p>
        </section>
        <section>
          <PortfolioItem
            headline="Validate"
            text="To test our new course design, we developed a challenge to teach the User Group how to use Census Business Builder with over 20 questions and follow-ups and two guided activities through the prototype. We gathered usability tests that we conducted during our research into a report shared with our team and the Census Business Builder developers on the accessibility of Census products. Please contact me if you’d like to learn more about our user research.           "
          />
          <Blockquote
            quote="“Having the walkthrough of the data [from the course] was the most beneficial. I got to see the potential of the data. To me, that's the real power of the site.”"
            source="- Participant 6"
          />
        </section>
        <Figure
          ImageLink={Mockup3}
          ImageAlt="Landing page design for Census Academy on an ipad on a white table with blue rug."
          ImageNum="1"
          ImageCaption="Mockup of a landing page design I created as a side project during my internship."
        />
        <section>
          <PortfolioItem
            headline="Result"
            text="This redesign was presented to the leadership and the Director of the U.S. Census Bureau during the Civic Digital Fellowship Demo Day. The project was also submitted to the U.S. Census Bureau’s 2021 Transformation Showcase. This was also my very first time working on a UX project – and I’ve learned so much along the way!"
          />
          <SecondaryItem 
          headline="Takeaways: What would I do differently?"
          text="If I were able to continue working on this project, I would definitely prioritize building a more clear design cycle into the team. 
          Looking back, I had ten weeks to redesign an entire website – that was really challenging for me as a new designer. I would have benefitted by ingraininng a more clear structure and outline to my work.
          If I were to go back in time, I would have instead focused on a smaller aspect of the project that I could be easily shippable as a proof of concept."
          />
        </section>
      </Fade>
    </Container>
    <Footer />
  </div>
);

export default CensusAcademy;
