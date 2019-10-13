import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card
} from "semantic-ui-react";

import Hero from "../components/HeroBanner";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <>
    <Hero />
    <Container>
      <Segment style={{ padding: "5em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row
            className="grid-container-item"
            style={{ background: "aliceblue" }}
          >
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Order Pickup
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We'll have your order ready on the Rapid Pick-Up shelf at the
                time you choose. No lines, no wait. Ordering for 10 or more?
                Click "Order Catering" in the box below.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="large" src="../static/assets/pickup.png" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            className="grid-container-item"
            style={{ marginBottom: 30 }}
          >
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Delivery
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We'll deliver your meal to you at your home or business.
                Ordering for 10 or more? Click "Order Catering" in the box
                below.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                rounded
                size="large"
                src="../static/assets/delivery.png"
                style={{ padding: "4em 2em" }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button animated size="huge" inverted color="green">
                <Button.Content visible>Order Now</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "5em 0em" }} vertical>
        <Header
          textAlign="center"
          as="h1"
          content="Most polular"
          subheader="Most of the customers are choosing these items"
          style={{ marginBottom: 50 }}
        />
        <Grid container stackable verticalAlign="middle">
          <Grid.Row columns={3}>
            <Grid.Column>
              <Card style={{ width: "100%" }}>
                <Image
                  src="../static/menu/banhmothitnguoi.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Deli Special Banh Mi</Card.Header>

                  <Card.Description>
                    French ham and pork belly topped with cucumbers, jalapenos,
                    pickled carrots.
                  </Card.Description>
                </Card.Content>
                <Card.Content>$7.50</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card style={{ width: "100%" }}>
                <Image src="../static/menu/banhmi.jpg" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Grilled Pork Banh Mi</Card.Header>

                  <Card.Description>
                    Grilled pork topped with cucumbers, jalapenos, pickled
                    carrots, and cilantro in a toasted baguette.
                  </Card.Description>
                </Card.Content>
                <Card.Content>$7.75</Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card style={{ width: "100%" }}>
                <Image
                  src="../static/menu/grill-chicken-banhmi.jpg"
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Card.Header>Roast Chicken Banh Mi</Card.Header>

                  <Card.Description>
                    Glazed chicken breast topped with cucumbers, jalapenos,
                    pickled carrots, and cilantro
                  </Card.Description>
                </Card.Content>
                <Card.Content>$6.75</Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ marginTop: 30 }}>
            <Grid.Column textAlign="center">
              <Link href="/menu">
                <Button size="huge" color="green">
                  View Menu <Icon name="arrow right" />
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  </>
);
export default HomepageLayout;
