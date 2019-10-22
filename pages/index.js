import React from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
  Card
} from "semantic-ui-react";

import Hero from "../components/HeroBanner";

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
                time you choose. No lines, no wait.
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
                We'll deliver your Vietnamese sandwiches to you at your home or
                business. Ordering for 10 or more? Click here for more details.
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
              <Link href="start-order">
                <Button animated size="huge" inverted color="green">
                  <Button.Content visible>Order Now</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
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
