import React from "react";
import Link from "next/link";
import ContainerLayout from "../components/_App/ContainerLayout";
import { Grid, Header, Button, Icon, Image, Segment } from "semantic-ui-react";
import { bannerContent } from "../utils/staticContent";

function AboutUs() {
  return (
    <ContainerLayout
      banner
      content
      bannerContent={bannerContent.aboutUs}
      size="150px"
    >
      <Segment vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row
            className="grid-container-item"
            style={{ background: "aliceblue" }}
          >
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Our STORY
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We'll have your order ready on the Rapid Pick-Up shelf at the
                time you choose. No lines, no wait.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="large" src="../static/assets/about-us.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            className="grid-container-item"
            style={{ marginBottom: 30 }}
          >
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Our FOOD
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
                src="../static/assets/our-story.jpg"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Link href="start-order">
                <Button animated size="huge" inverted color="green">
                  <Button.Content visible>Start Order</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </ContainerLayout>
  );
}

export default AboutUs;
