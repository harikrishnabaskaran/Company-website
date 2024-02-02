// About.jsx
import React from "react";
import aboutImage from '../images/home8.jpg'; 
import Common from "./Common";
import "../styles/About.css";

const About = () => {
  return (
    
      <div>
      <Common
        name="Welcome to About page"
        imgsrc={aboutImage}
        visit="/contact"
        btname="Contact Now"
      />
      
      <div className="About-container">
        <h1>About KbInfoTech</h1>
        <div className="content-container">
          <div className="text-content">
            <div className="text-content1">
              <h4>
                We, at KbInfoTech, are defined by our shared passion for
                innovation, attention to detail, and trusted relationships.
              </h4>
            </div>
            <br/>
              <p>
              We, KbInfoTech, are a trusted partner for all our customers in their product engineering & futuristic digital initiative endeavours. Our unwavering focus on customer delight, passion for innovation and an eye for business-need driven solutioning helps our customers derive competitive advantage from their technology solutions. We ensure this across areas of product engineering, enterprise application development or modernization, MVPs for new initiatives or digital transformation of their business.
              </p>
           <br/>
            <p>
              As a trusted partner in product engineering, futuristic digital
              initiatives, and enterprise application development, our focus on
              customer delight and business-driven solutions helps clients
              gain a competitive advantage.
            </p>
            <br/>
            <div className="work">
            <h3 style={{ color: 'rgb(34, 189, 137)' }}>Work Environment</h3>
            </div>
            <p>
              Our workplace is a collaborative space, not a warzone. Wherever we
              work, be it coffee shops or terraces, it's a place for friends to
              brainstorm and get things done.
            </p>
            <br/>
          <h3 style={{ color: 'rgb(34, 189, 137)' }}>Our Work Culture</h3>
            <p>
              At KbInfoTech, commitment, a passion for learning, and customer
              focus define us. We celebrate the ability to take risks and offer
              unwavering support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
