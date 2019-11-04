import React from "react";
import ContainerLayout from "../components/_App/ContainerLayout";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
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
                Lusum is a sports brand created with a mission to make a
                difference in the sports consumables market. Our unique business
                model is to never pay sponsorships to clubs, leagues and players
                so that we can offer you the very best balls at much more
                affordable prices.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image rounded size="large" src="../static/assets/about-us.jpg" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row
            className="grid-container-item"
            style={{ marginBottom: 30, padding: "10px 0" }}
          >
            <Grid.Column width={6}>
              <Image
                rounded
                size="large"
                src="../static/assets/our-story.jpg"
              />
            </Grid.Column>
            <Grid.Column width={8} floated="right">
              <Header as="h3" style={{ fontSize: "2em" }}>
                Our FOOD
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Lusum is a sports brand created with a mission to make a
                difference in the sports consumables market. Our unique business
                model is to never pay sponsorships to clubs, leagues and players
                so that we can offer you the very best balls at much more
                affordable prices.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </ContainerLayout>
  );
}

export default AboutUs;
