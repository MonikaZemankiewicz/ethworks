import React from "react";
import arrow from "../assets/arrow.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    file(relativePath: { eq: "video.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);
  return (
    <header className="hero clearfix">
      <div className="hero-text">
        <h1>
          The first <nobr>fully-automatic</nobr> social crypto trading platform
          with real crypto currency
        </h1>
      </div>
      <div className="newsletter">
        <p>Subscribe and get the latest information</p>
        <form>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
            />
            <button type="submit" className="submit-btn btn">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      <div className="arrow">
        <a href="/">
          <img src={arrow} alt="logo " />
        </a>
      </div>
      <div className="social-media">
        <a href="https://twitter.com/">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
      </div>
      <div className="video-container">video container</div>
    </header>
  );
};

export default Hero;