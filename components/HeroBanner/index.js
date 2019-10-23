import React from "react";
import Link from "next/link";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import "./style.css";

export default ({ size = "500px" }) => (
  <Segment
    inverted
    textAlign="center"
    style={{
      minHeight: size,
      padding: "1em 0em",
      background:
        "url(../../../static/assets/hero-vn-sandwich-bg.jpeg) no-repeat center center"
    }}
    className="hero"
    vertical
  >
    <div className="hero-content">
      <Header as="h1" content="Welcome to Mr. Banh Mi" />
      <div className="border"></div>
      <Header
        as="h2"
        content="Treat Yourself to a Memorable Vietnamese Dining Experience"
        style={{ margin: "0 0 2em", padding: 0 }}
      />
      <br />
      <Link href="/start-order">
        <Button size="medium" color="red">
          Order Online (coming soon)
          <Icon name="right arrow" />
        </Button>
      </Link>
    </div>
  </Segment>
);
