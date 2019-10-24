import ContainerLayout from "../components/_App/ContainerLayout";
import { Grid, Card } from "semantic-ui-react";
import { bannerContent } from "../utils/staticContent";

function StartOrder() {
  return (
    <ContainerLayout
      banner
      content
      bannerContent={bannerContent.startOrder}
      size="150px"
      text
    >
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Card
              link
              centered
              header="Delivery"
              image="../static/assets/uber-eat.png"
              className="start-order-card delivery-card with-border"
            />
          </Grid.Column>
          <Grid.Column>
            <Card
              link
              centered
              header="Carryout"
              image="../static/assets/food-carryout.png"
              className="start-order-card carry-out-card with-border"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </ContainerLayout>
  );
}

export default StartOrder;
