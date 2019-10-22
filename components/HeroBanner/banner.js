import React from "react";
import { Header, Segment } from "semantic-ui-react";
import "./style.css";

export default ({ size, content, bannerContent }) => (
  <Segment
    inverted
    textAlign="center"
    style={{
      minHeight: size,
      padding: "1em 0em",
      background: `url(../../../static/assets/${
        bannerContent.customBgFile
          ? bannerContent.customBgFile
          : "mrbanhmi-menu-background.jpg"
      } ) no-repeat center bottom`
    }}
    className="hero"
    vertical
  >
    {content && (
      <div className="small-hero-content">
        <Header as="h1" content={bannerContent.header} />
        <div className="border"></div>
        <Header as="h2" content={bannerContent.description} />
      </div>
    )}
  </Segment>
);
