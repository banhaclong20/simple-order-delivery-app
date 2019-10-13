import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import "./style.css";

export default ({ size, content }) => (
  <Segment
    inverted
    textAlign="center"
    style={{
      minHeight: size,
      padding: "1em 0em",
      background:
        "url(../../../static/assets/hero-banner.jpg) no-repeat center center"
    }}
    className="hero"
    vertical
  >
    {content && (
      <div className="hero-content">
        <Header as="h1" content="Welcome to MrBanhMi" />
        <div className="border"></div>
        <Button size="medium" color="red">
          Order Online (coming soon)
          <Icon name="right arrow" />
        </Button>
      </div>
    )}
  </Segment>
);
