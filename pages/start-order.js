import { connect } from "react-redux";
import OrderActions from "../redux/actions/orderActions";
import ContainerLayout from "../components/_App/ContainerLayout";
import {
  Grid,
  Card,
  Button,
  Divider,
  Segment,
  Header,
  Radio
} from "semantic-ui-react";
import Router from "next/router";
import { bannerContent } from "../utils/staticContent";

function StartOrder({
  startOrder,
  orderType,
  setStartOrder,
  setOrderType,
  setSelectedAddress
}) {
  function setOrder(type) {
    setOrderType(type);
    setStartOrder(true);
  }

  function handleOrderCarryout() {
    setSelectedAddress(true);
    Router.push("/menu");
  }

  return (
    <ContainerLayout
      banner
      content
      bannerContent={bannerContent.startOrder}
      size="150px"
      text
    >
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Card
              centered
              header="Delivery"
              image="../static/assets/uber-eat.png"
              className={`${
                orderType === "delivery"
                  ? "start-order-card delivery-card selected"
                  : "start-order-card delivery-card with-border"
              }`}
              onClick={() => setOrder("delivery")}
            />
          </Grid.Column>
          <Grid.Column>
            <Card
              centered
              header="Carryout"
              image="../static/assets/food-carryout.png"
              className={`${
                orderType === "carryout"
                  ? "start-order-card carry-out-card selected"
                  : "start-order-card carry-out-card with-border"
              }`}
              onClick={() => setOrder("carryout")}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {startOrder && orderType === "carryout" ? (
        <>
          <br />
          <Divider />
          <Segment basic textAlign="center">
            <Header as="h3">Address to pick up</Header>
            <Radio
              label="9370 Warren Parkway, Frisco, TX 75035"
              defaultChecked
            />

            <Divider horizontal></Divider>

            <Button
              color="green"
              content="Order Carryout"
              icon="car"
              labelPosition="left"
              onClick={handleOrderCarryout}
            />
          </Segment>
        </>
      ) : null}
    </ContainerLayout>
  );
}

const mapStateToProps = state => ({
  startOrder: state.order.startOrder,
  orderType: state.order.orderType
});

const mapDispatchToProps = {
  setStartOrder: OrderActions.setStartOrder,
  setOrderType: OrderActions.setOrderType,
  setSelectedAddress: OrderActions.setSelectedAddress
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartOrder);
