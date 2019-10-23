import React from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Divider,
  Image,
  Icon
} from "semantic-ui-react";

export default () => (
  <Segment
    inverted
    vertical
    style={{ margin: "2em 0em 0em", padding: "5em 0em" }}
  >
    <Container textAlign="center">
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Menu" />
          <List link inverted>
            <List.Item as="a">Vietnamese Sandwiches</List.Item>
            <List.Item as="a">Smoothies / Drinks</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Customer Service" />
          <List link inverted>
            <List.Item as="a">Contact Us</List.Item>
            <List.Item as="a">FAQs</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Others" />
          <List link inverted>
            <List.Item as="a">Our Story</List.Item>
            <List.Item as="a">Sign In</List.Item>
            <List.Item as="a">Create Account</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as="h4" content="Mr Banh Mi" />
          <p>
            <span>
              <Icon name="map marker alternate" />
            </span>{" "}
            9370 Warren Parkway, Frisco, TX 75035
          </p>
          <p>
            <span>
              {" "}
              <Icon name="call" />
            </span>{" "}
            (469) 556-7964
          </p>
        </Grid.Column>
      </Grid>

      <Divider inverted section />
      <Image centered size="mini" src="../../static/logo-mrbanhmi.png" />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Copyright © 2019 Mr Banh Mi. All rights reserved.
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
        <List.Item as="a" href="http://www.tomtrandev.com/">
          Website by TomTran
        </List.Item>
      </List>
    </Container>
  </Segment>
);
