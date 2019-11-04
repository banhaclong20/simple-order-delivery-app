import React from "react";
import ContainerLayout from "../components/_App/ContainerLayout";
import { Grid, Header, Item } from "semantic-ui-react";
import { bannerContent } from "../utils/staticContent";

function ContactUs() {
  return (
    <ContainerLayout
      banner
      content
      bannerContent={bannerContent.contactUs}
      size="150px"
      text
    >
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h2" content="ADDRESS:" />
            <Item>
              <Item.Content>
                <Item.Meta>9370 Warren Parkway</Item.Meta>
                <Item.Meta>Frisco, TX 75035</Item.Meta>
                <Item.Meta>
                  <a
                    className="custom-link"
                    href="https://www.google.com/maps/place/9370+Warren+Pkwy,+Frisco,+TX+75035/@33.10951,-96.8039967,17z/data=!3m1!4b1!4m5!3m4!1s0x864c3cfaede3334f:0xa8d34e10ab2edb07!8m2!3d33.10951!4d-96.801808"
                    target="_blank"
                  >
                    Get Direction
                  </a>
                </Item.Meta>
              </Item.Content>
            </Item>
            <Header as="h2" content="PHONE:" />
            <Item>
              <Item.Content>
                <Item.Meta>(972) 292-9798</Item.Meta>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h2" content="BUSINESS HOURS:" />
            <Item>
              <Item.Content>
                <Item.Meta>
                  <span className="boldText">Monday - Thursday:</span> 10:00 AM
                  - 9:00 PM
                </Item.Meta>
                <Item.Meta>
                  <span className="boldText">Saturday:</span> 10:00 AM - 8:00 PM
                </Item.Meta>
                <Item.Meta>
                  <span className="boldText">Sunday:</span> 10:00 AM - 5:00 PM
                </Item.Meta>
              </Item.Content>
            </Item>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Header as="h2" content="REACH OUT TO US" />
            <Item>
              <Item.Content>
                <Item.Meta>
                  Do you have some feedback for us? A compliment or a complaint?
                  Whatever it is, please reach out to:
                  <span className="custom-link"> mr.banhmi@yahoo.com</span>
                </Item.Meta>
              </Item.Content>
            </Item>
            <br />
            <br />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ContainerLayout>
  );
}

export default ContactUs;
