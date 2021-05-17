import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./components/style.css";
import Figure from "./components/Figure";
import Footer from "./components/Footer";
import Blockquote from "./components/Blockquote";
import Fade from "react-reveal/Fade";
import Home from "./images/About/home.jpg";
import Me from "./images/About/me.jpg";
import Laptop from "./images/About/laptop.jpg";
import Pie from "./images/About/pie.jpg";

const About = () => (
    <Container>
      <Row>
        <Col>
          {" "}
          <Fade top>
            <h1 className="my-4">Hi, my name is Amy Lo!</h1>
            <Blockquote quote="I push my pixels where they can count the most, for the people who need a voice the most." />
          </Fade>
          <Fade bottom>
            <Figure
              ImageLink={Me}
              ImageAlt=""
              ImageNum="1"
              ImageCaption="This is a picture of me at Lake Tahoe from my dorm trip at Stanford! It was freezing – and the first time I saw snow."
            />
          </Fade>
        </Col>
      </Row>

      <Fade bottom>
        <Row>
          <Col lg={5}>
            <h2>
              I’m an L.A. girl with big dreams – I’m discovering mine studying
              computer science and psychology at Stanford.
            </h2>
            <p>
              During my first year at Stanford, I took courses in programming,
              neuroscience, and social psychology that made me wonder:
            </p>
            <p>
              How can we use our understanding of the mind to impact what
              happens on the code-level?
            </p>
            <p>
              Those questions eventually led me to the product design field.
              There, I'm discovering how I can make impact and make lives easier
              through technology.
            </p>
            <h3>
              I pride myself on bringing ethics and a deep love of research to
              my work.
            </h3>
            <p>
              I care about what happens both on and out of the screen. To me,
              the best design is empathetic, compassionate, and inclusive.
            </p>
            <p>
              {" "}
              I once created my own social media campaign raising{" "}
              <a
                href="https://www.instagram.com/p/CBUe6e2JIIF/"
                className="textLink"
                target="_blank"
                rel="noreferrer"
              >
                close to $37k for Black Lives Matter
              </a>
              . In my free time, I work on bringing accessible, open data to
              students with the <a
                className="textLink"
                target="_blank"
                rel="noreferrer"
                href="https://stanfordopendata.org/"
              >
                 Stanford Open Data Project
              </a>
              . I recently researched the last decade of tech culture with the{" "}
              <a
                className="textLink"
                target="_blank"
                rel="noreferrer"
                href="https://techhistory.stanford.edu/"
              >
                Tech History Project
              </a>
              . I'm also an avid cook and a music nerd.
            </p>
          </Col>
          <Col lg={2} />
          <Col lg={5}>
            <Figure
              ImageLink={Home}
              ImageAlt=""
              ImageNum="2"
              ImageCaption="Blue skies all year: This is what home looks like to me."
            />
            <Figure
              ImageLink={Laptop}
              ImageAlt=""
              ImageNum="3"
              ImageCaption="A picture of my trusty old Macbook who's been with me 
              through many hours of design and code."
            />
            <Figure
              ImageLink={Pie}
              ImageAlt=""
              ImageNum="4"
              ImageCaption="The design of everyday things: when I'm not working, 
              I'm making oddly intricate pies."
            />
          </Col>
        </Row>
      </Fade>

    <Footer />
    </Container>

);

export default About;
