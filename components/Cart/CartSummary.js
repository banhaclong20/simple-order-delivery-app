import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button, Grid } from "semantic-ui-react";
import calculateCartTotal from "../../utils/calculateCartTotal";

function CartSummary({ products, handleCheckout, success }) {
  const [cartAmount, setCartAmount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);

  if (isCartEmpty) {
    return null;
  }

  return (
    <Grid stackable>
      <Grid.Row columns={2}>
        <Grid.Column>
          <strong>Sub total:</strong> ${cartAmount}
        </Grid.Column>
        <Grid.Column>
          <StripeCheckout
            name="React Reserve"
            amount={stripeAmount}
            image={products.length > 0 ? products[0].product.mediaUrl : ""}
            currency="USD"
            shippingAddress={true}
            billingAddress={true}
            zipCode={true}
            stripeKey="pk_test_t7RpkuOEdeYcNPrzs362Xe6Y00MxwtXekY"
            token={handleCheckout}
            triggerEvent="onClick"
          >
            <Button
              icon="cart"
              disabled={isCartEmpty || success}
              color="green"
              floated="right"
              content="Checkout"
            />
          </StripeCheckout>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CartSummary;
