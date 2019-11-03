import React from "react";
import { Input, Label } from "semantic-ui-react";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import catchErrors from "../../utils/catchErrors";
import cookie from "js-cookie";

function AddProductToCart({ user, productId, price }) {
  const [quantity, setQuantity] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => setSuccess(false), 3000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [success]);

  async function handleAddProductToCart() {
    try {
      setLoading(true);
      const url = `${baseUrl}/api/cart`;
      const payload = { quantity, productId };
      const token = cookie.get("token");
      const headers = { headers: { Authorization: token } };
      await axios.put(url, payload, headers);
      setSuccess(true);
    } catch (error) {
      catchErrors(error, window.alert);
    } finally {
      setLoading(false);
    }
  }

  function handlePriceCalculator() {
    let itemPrice = price;
    itemPrice = price * quantity;

    return itemPrice;
  }

  return (
    <>
      <div className="price-modal">
        <Label size="large" style={{ color: "#2d2d2d" }}>
          ${handlePriceCalculator()}
        </Label>
      </div>
      <Input
        type="number"
        min="1"
        placeholder="Quantity"
        label="Quantity"
        className="quanlity-input"
        value={quantity}
        onChange={event => setQuantity(Number(event.target.value))}
        action={
          success
            ? {
                color: "blue",
                content: "Item Added!",
                icon: "plus cart",
                disabled: true
              }
            : {
                color: "green",
                content: "Add to Cart",
                icon: "plus cart",
                loading,
                disabled: loading,
                onClick: handleAddProductToCart
              }
        }
      />
    </>
  );
}

export default AddProductToCart;
