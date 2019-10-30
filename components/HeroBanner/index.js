import React from "react";
import { connect } from "react-redux";
import Router from "next/router";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import "./style.css";

const HeroBanner = ({ size = "500px", orderType, selectedAddress }) => {
  const handleOrderButton = () => {
    if (orderType !== undefined && selectedAddress) {
      Router.push("/menu");
    } else {
      Router.push("/start-order");
    }
  };
  return (
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

        <Button size="medium" color="red" onClick={handleOrderButton}>
          Order Online (coming soon)
          <Icon name="right arrow" />
        </Button>
      </div>
    </Segment>
  );
};

const mapStateToProps = state => ({
  orderType: state.order.orderType,
  selectedAddress: state.order.selectedAddress
});

export default connect(mapStateToProps)(HeroBanner);
