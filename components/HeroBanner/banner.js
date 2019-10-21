import React from "react";
import { Header, Segment } from "semantic-ui-react";
import "./style.css";

export default ({ size, content }) => (
  <Segment
    inverted
    textAlign="center"
    style={{
      minHeight: size,
      padding: "1em 0em",
      background:
        "url(../../../static/assets/mrbanhmi-menu-background.jpg) no-repeat center bottom"
    }}
    className="hero"
    vertical
  >
    {content && (
      <div className="small-hero-content">
        <Header as="h1" content="Start Order" />
        <div className="border"></div>
        <Header as="h2" content="Please choose your options to get started!" />
      </div>
    )}
  </Segment>
);
