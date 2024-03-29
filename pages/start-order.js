import React from "react";
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
  Radio,
  Modal,
  Icon
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
  const [showModalDelivery, setShowModalDelivery] = React.useState(false);

  function setOrder(type) {
    setOrderType(type);
    setStartOrder(true);
  }

  function handleOrderCarryout() {
    setSelectedAddress(true);
    Router.push("/menu");
  }

  function openDeliveryModal() {
    setOrder("delivery");
    setShowModalDelivery(true);
  }

  function handleConfirmBtn() {
    setShowModalDelivery(false);
    window.open("https://www.ubereats.com/en-US/", "_blank");
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
            <Modal
              trigger={
                <Card
                  header="Delivery"
                  image="../static/assets/uber-eat.png"
                  className={`${
                    orderType === "delivery"
                      ? "start-order-card delivery-card selected"
                      : "start-order-card delivery-card with-border"
                  }`}
                  onClick={openDeliveryModal}
                />
              }
              closeIcon
              size="small"
              open={showModalDelivery}
              onClose={() => setShowModalDelivery(false)}
            >
              <Header icon="exclamation circle" content="Uber Eats Delivery" />
              <Modal.Content>
                <h4>
                  Please click on Confirm button below to go to Mr Banh Mi at
                  Uber Eats website.
                </h4>
              </Modal.Content>
              <Modal.Actions>
                <Button color="green" onClick={handleConfirmBtn}>
                  <Icon name="checkmark" /> Confirm
                </Button>
              </Modal.Actions>
            </Modal>
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
